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
    const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

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

    function handleDrinkClick(drink: Drink) {
        setSelectedDrink(drink);
    }

    function handleCloseModal(){
        setSelectedDrink(null);
    }

    return (
        <section className="">
            {!selectedLiquor && (
                <div className="">
                    {LIQUORS.map(liquor => (
                        <button
                            key={liquor + "-option"}
                            className=""
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
                        <div className="">Loading drinks...</div>
                    )}
                    {!loading && drinks.length > 0 && (
                        <div className="">
                        {drinks.map(drink => (
                            <div
                                key={drink.idDrink}
                                className=""
                                onClick={() => handleDrinkClick(drink)}
                            >
                            <img
                                src={drink.strDrinkThumb + '/small'} // 200x200px
                                alt={drink.strDrink}
                                className=""
                            />
                            <span className="">{drink.strDrink}</span>
                            </div>
                        ))}
                        </div>
                    )}
                </>
            )}
            {selectedDrink && (
                <div className="" onClick={handleCloseModal}>
                    <div className="" onClick={e => e.stopPropagation()}>
                        <div className="">
                            <h2 className="">{selectedDrink.strDrink}</h2>
                            <button className="" onClick={handleCloseModal}>x</button>
                        </div>

                        <img
                            src={selectedDrink.strDrinkThumb + '/large'}
                            alt={selectedDrink.strDrink}
                            className=""
                        />

                        <h3 className="">Ingredients</h3>
                        <ul className="">
                            {selectedDrink.ingredients && selectedDrink.ingredients.map((ingredient, index) => (
                                <li key={index} className="">{ingredient}</li>
                            ))}
                        </ul>

                        <h3 className="">Instructions</h3>
                        <p className="">{selectedDrink.strInstructions}</p>
                    </div>
                </div>
            )}
        </section>
    )
}