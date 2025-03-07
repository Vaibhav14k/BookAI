import logo from './logo.svg';
import Header from './Compound/Header';
import Main_container from './Compound/Main_container';
import Cards from './Compound/Cards';
import Step_container from './Compound/Step_container';
import Sub_container from './Compound/Sub_container';
import Sub_cards from './Compound/Sub_cards';
import Step_container2 from './Compound/Step_container2';
import End from './Compound/End';
import Letter from './Compound/Letter';
import Footer from './Compound/Footer';
import Background from './Compound/Background';
import "./globals.css"
function App() {

  return (
    <>
    <div className='main '>
      <div>
      
      <div className='w-1 h-1 rounded-full transform translate-x-12 translate-y-24 duration-500 bg-white fixed top-14 left-12'></div>
      <div className='w-1 h-1 rounded-full transform translate-x-[50px] translate-y-[1000px] transition duration-500 delay-300 bg-white fixed top-42 left-13'></div>
      <div className='w-1 h-1 transform translate-x-[50px] translate-y-[500px] transition duration-500 delay-300 rounded-full bg-white fixed top-12 left-4'></div>
      <div className='w-1 h-1 transform translate-x-[50px] translate-y-[500px] transition duration-500 delay-300 rounded-full bg-white fixed top-16 left-3'></div>
      <div className='w-1 h-1 animate-move rounded-full bg-white fixed top-28 left-20'></div>
      <div className='w-1 h-1 rounded-full  bg-white fixed top-10 left-10'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-49 left-20'></div>
      <div className='w-1 h-1 transform translate-x-[50px] translate-y-[500px] transition duration-500 delay-300 rounded-full bg-white fixed top-82 left-22'></div>
      <div className='w-1 h-1 transform translate-x-[50px] translate-y-[500px] transition duration-500 delay-300 rounded-full bg-white fixed top-92 left-12'></div>
      <div className='w-1 h-1 transform translate-x-[50px] translate-y-[500px] transition duration-500 delay-300 rounded-full bg-white fixed top-10 left-10'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-55 left-10'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-90 left-10'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-49 left-20'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-82 left-22'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-92 left-12'></div>
      <div className='w-1 h-1 transform translate-x-[50px] translate-y-[500px] transition duration-500 delay-300 rounded-full bg-white fixed top-10 left-10'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-55 left-10'></div>
      <div className='w-1 h-1 rounded-full bg-white fixed top-90 left-10'></div>

      </div>
    </div>
    <div className="App max-w-6xl mx-auto  relative">
      <Header/>
      <h1 className='text-4xl w-4/5 mx-auto mt-20 text-white  font-bold sm:text-center ' >Explore the Possibilities of AI  Book Writing with BookAI
      </h1>
      <p className='text-zinc-400 w-1/2 mt-4 text-lg mx-auto text-center 	' >
      Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <div className='flex text-white flex-wrap  justify-center items-center gap-1 mt-4 ' >
        <button className='w-32 h-10 text-lg font-medium bg-blue-400  rounded-full' >Get Started</button>
        <button className='w-36 h-10 text-lg font-medium bg-blue-400  rounded-full'  >Get API Access</button>
      </div>
      <p className='text-yellow-300 text-center mt-4 mb-10 ' >Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
      <Main_container/>
      <Cards/>
      <Step_container/>
      <h1 className='text-center text-white font-semibold text-xl mt-12' >Sample Books Generated by BookAI</h1>
      <p className='text-center text-white font-medium my-6 ' >Explore some of the captivating books created using our AI technology.</p>
      <Sub_cards/>
      
      <Step_container2/>
      <End/>
      <Letter/>
      <Footer/>

  </div>
    </>
  );
}

export default App;
