import { useState } from 'react';

// interface Drink {

// }

export default function Drinks (){
    const [selectedLiquor, setSelectedLiquor] = useState<string | null>(null)
    const [drinks, setDrinks] = useState([])

    // fetch drinks when liquor has been selected
    async function handleLiquorClick(liquor: string) {
        setDrinks([]);
        setSelectedLiquor(liquor);
        

        try {

        } catch(e: unknown){

        }
    }

    return (
        <section className="h-20 w-20 bg-black">
            <div className=""></div>
        </section>
    )
}