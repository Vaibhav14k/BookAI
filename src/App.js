import logo from './logo.svg';
import Header from './Compound/Header';
import Main_container from './Compound/Main_container';
import Cards from './Compound/Cards';
import Step_container from './Compound/Step_container';
import Sub_container from './Compound/Sub_container';
function App() {
  return (
    <div className="App max-w-6xl mx-auto  ">
      <Header/>
      <h1 className='text-4xl w-4/5 mx-auto mt-20  font-bold sm:text-center ' >Explore the Possibilities of AI  Book Writing with BookAI
      </h1>
      <p className='text-zinc-400 w-1/2 mt-4 text-lg mx-auto text-center 	' >
      Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <div className='flex flex-wrap  justify-center items-center gap-1 mt-4 ' >
        <button className='w-32 h-10 text-lg font-medium bg-blue-400  rounded-full' >Get Started</button>
        <button className='w-36 h-10 text-lg font-medium bg-blue-400  rounded-full'  >Get API Access</button>
      </div>
      <p className='text-yellow-300 text-center mt-4 mb-10 ' >Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
      <Main_container/>
      <Cards/>
      <Step_container/>
  
    </div>
    
  );
}

export default App;
