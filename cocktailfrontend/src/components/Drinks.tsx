import { useState } from 'react';

// interface Drink {

// }

const LIQUORS = [ "Vodka, Rum, Whiskey "];

export default function Drinks (){
    const [selectedLiquor, setSelectedLiquor] = useState<string | null>(null)
    const [drinks, setDrinks] = useState([])

    // fetch drinks when liquor has been selected
    async function handleLiquorClick(liquor: string) {
        setDrinks([]);
        setSelectedLiquor(liquor);
        

        try {
            const response = await fetch(`http://localhost:8080/api/drinks/by-ingredient?ingredient=${liquor}`)
            const data = await response.json();
            console.log(data);
        } catch(e: unknown){

        }
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
        </section>
    )
}