import { useState } from 'react';

const LIQUORS = [
  { name: "Vodka", image: "https://pngimg.com/uploads/vodka/vodka_PNG73893.png" },
  { name: "Whiskey", image: "https://picng.com/upload/whisky/png_whisky_17218.png" },
  { name: "Rum", image: "https://jensensliquors.com/cdn/shop/files/malibu-175-new-web.png?v=1726861735&width=990" },
  { name: "Tequila", image: "https://pngitem.com/pimgs/m/147-1473539_tequila-bottles-png-patron-tequila-silver-png-transparent.png" },
];

interface Drink {
  idDrink: string;
  strDrink: string;
  ingredients: string[];
  strInstructions: string;
  strDrinkThumb: string;
}

export default function Drinks() {
    const [selectedLiquor, setSelectedLiquor] = useState<string | null>(null);
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

    async function handleLiquorClick(liquor: string) {
        setLoading(true);
        setDrinks([]);
        setSelectedLiquor(liquor);

        try {
            const response = await fetch(
                `http://localhost:8080/api/drinks/by-ingredient?ingredient=${liquor}`
            );
            const data: Drink[] = await response.json();
            setDrinks(data);
        } catch (e: unknown) {
            console.error('Unable to fetch drinks');
        } finally {
            setLoading(false);
        }
    }

    function handleBack() {
        setSelectedLiquor(null);
        setDrinks([]);
    }

    function handleDrinkClick(drink: Drink) {
        setSelectedDrink(drink);
    }

    function handleCloseModal() {
        setSelectedDrink(null);
    }

    return (
        <section className="py-12 px-8 max-w-[1400px] mx-auto mt-[20px]">
        {!selectedLiquor && (
            <>
            <h2 className="font-typewriter text-2xl text-center mb-[20px]">
                choose your liquor...
            </h2>
            <div className="flex justify-center gap-8">
                {LIQUORS.map((liquor) => (
                <button
                    key={liquor.name}
                    className="w-[250px] h-[250px] bg-[#f5f5f5] rounded-lg border border-gray-200 p-10 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    onClick={() => handleLiquorClick(liquor.name)}
                >
                    <h3 className="font-typewriter text-base font-bold text-center mb-4">
                    {liquor.name}
                    </h3>
                    <div className="w-full h-[140px] flex items-center justify-center">
                    <img
                        src={liquor.image}
                        alt={liquor.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => { 
                        e.currentTarget.style.opacity = '0';
                        }}
                    />
                    </div>
                </button>
                ))}
            </div>
            </>
        )}

        {selectedLiquor && (
            <>
            <button
                onClick={handleBack}
                className="font-typewriter text-sm mb-8 flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
                ← Return to List
            </button>

            <h2 className="font-typewriter text-2xl mb-8">
                {selectedLiquor} Drinks
            </h2>

            {loading && (
                <p className="font-typewriter text-center py-12">Loading drinks...</p>
            )}

            {!loading && drinks.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {drinks.map((drink) => (
                    <div
                    key={drink.idDrink}
                    className="bg-[#f5f5f5] rounded-lg border border-gray-200 p-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    onClick={() => handleDrinkClick(drink)}
                    >
                    <div className="w-full aspect-square rounded-md overflow-hidden mb-3 bg-white">
                        <img
                        src={drink.strDrinkThumb + '/preview'}
                        alt={drink.strDrink}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="font-typewriter text-sm text-center line-clamp-2">
                        {drink.strDrink}
                    </p>
                    </div>
                ))}
                </div>
            )}
            </>
        )}

        {selectedDrink && (
            <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
            onClick={handleCloseModal}
            >
            <div
                className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <h2 className="font-typewriter text-lg pr-4">
                    {selectedDrink.strDrink}
                </h2>
                <button
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-lg"
                    onClick={handleCloseModal}
                >
                    ×
                </button>
                </div>

                <div className="p-6">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-6 bg-gray-100">
                    <img
                    src={selectedDrink.strDrinkThumb + '/large'}
                    alt={selectedDrink.strDrink}
                    className="w-full h-full object-cover"
                    />
                </div>

                <h3 className="font-typewriter text-xs uppercase tracking-wider text-gray-500 mb-3">
                    Ingredients
                </h3>
                <ul className="mb-6 space-y-1">
                    {selectedDrink.ingredients?.map((ingredient, index) => (
                    <li key={index} className="font-typewriter text-sm">
                        • {ingredient}
                    </li>
                    ))}
                </ul>

                <h3 className="font-typewriter text-xs uppercase tracking-wider text-gray-500 mb-3">
                    Instructions
                </h3>
                <p className="font-typewriter text-sm leading-relaxed">
                    {selectedDrink.strInstructions}
                </p>
                </div>
            </div>
            </div>
        )}
        </section>
    );
}