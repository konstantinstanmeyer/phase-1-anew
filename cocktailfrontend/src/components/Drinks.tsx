import { useState } from 'react';

const LIQUORS = [ "Vodka", "Rum", "Whiskey"];

interface Drink {
    idDrink: string;
    strDrink: string;
    ingredients: string[];
    strInstructions: string;
    strDrinkThumb: string;
}

export default function Drinks (){
    const [selectedLiquor, setSelectedLiquor] = useState<string | null>(null)
    const [drinks, setDrinks] = useState<Drink[]>([])
    const [loading, setLoading] = useState(false);

    // fetch drinks when liquor has been selected
    async function handleLiquorClick(liquor: string) {
        setLoading(true)
        setDrinks([]);
        setSelectedLiquor(liquor);
        console.log("Liquor: " + liquor);
        

        try {
            const response = await fetch(`http://localhost:8080/api/drinks/by-ingredient?ingredient=${liquor}`)
            const data: Drink[] = await response.json();

            setDrinks(data);
            setLoading(false);
            console.log(data);
        } catch(e: unknown){
            console.error('Unable to fetch drinks');
        }
    }

    function handleBack(){
        setSelectedLiquor(null)
        setDrinks([])
    }

    return (
        <section className="">
            {!selectedLiquor && (
                <div className="">
                    {LIQUORS.map(liquor => (
                        <button
                            key={liquor + "-option"}
                            className="l"
                            onClick={() => handleLiquorClick(liquor)}
                        >
                        {liquor}
                        </button>
                    ))}
                </div>
            )}
            {selectedLiquor && (
                <>
                    <button onClick={handleBack}>
                        Return to List
                    </button>
                    {loading && (
                        <div className="loading">Loading drinks...</div>
                    )}
                </>

            )}
        </section>
    )
}