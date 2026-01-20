import './App.css';
import Drinks from './components/Drinks';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full bg-white border-b border-gray-100 h-20">
        <div className=" mx-8 px-8 py-4 flex items-center justify-between h-full">
          <div className="flex items-center gap-4 flex-row">
            <img className="w-40 ml-[20px]" src="https://cdn.discordapp.com/attachments/615981164267569162/1463148182791000190/Lukon_1.png?ex=6970c66e&is=696f74ee&hm=5114f9ca24456b6abbbb99e49a390d51349c3afb706f0fd22552bba3df5d4da9&" />
            <img className="w-32" src="https://static.vecteezy.com/system/resources/previews/000/560/561/non_2x/vector-illustration-of-a-bottle-with-a-ship.jpg" />
          </div>
          <div className="flex items-center gap-16 mr-[20px]">
            <a href="#" className="font-typewriter text-sm hover:text-gray-600 transition-colors">Home</a>
            <a href="#" className="font-typewriter text-sm hover:text-gray-600 transition-colors">About Us</a>
            <a href="#" className="font-typewriter text-sm hover:text-gray-600 transition-colors">Services</a>
            <a href="#" className="font-typewriter text-sm hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section 
        className="relative w-full h-[320px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg')`,
          backgroundColor: '#87CEEB'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-200/40 via-cyan-300/30 to-sky-400/20"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-8 h-full flex items-center">
          <div className="flex items-center gap-0 bg-white/85 backdrop-blur-sm rounded-lg px-8">
            <div className="w-20 h-36 flex items-end justify-center -mr-2">
              <img 
                src="https://www.transparentpng.com/download/cocktail/H3AkUN-cocktail-icon-clipart.png" 
                alt="" 
                className="w-16 h-32 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className=" py-6 max-w-md">
              <h1 className="font-typewriter text-2xl leading-tight mb-3">
                Hone Your Bartending Skills |
              </h1>
              <p className="font-typewriter text-sm leading-relaxed text-gray-700">
                Our website offers a clean, easy-to-navigate space to make drinks with whichever alcohol is at hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Drinks />
    </div>
  )
}

export default App