import './App.css';


//* Importing React Components
import Banner from './components/Banner/Banner';
import HeaderComp from './components/Header/HeaderComp.js'
import Title from './components/Title/Title';
import Buttons from './components/Buttons/Buttons'



//* Log Prop for the Header Compnent 
const logoPNGUrlBlack = "https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"

const modelArray = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels"
]

const optionArray = [
    "Shop",
    "Account",
    "Menu"
]

function App() {
  return (
    <div className="App">
      <div className="App-top">
      	<Banner/>
        <HeaderComp logoUrl={logoPNGUrlBlack} modelArray={modelArray} optionArray={optionArray}/>
        <Title/>
      </div>
      <div className="App-bottom">
        <Buttons/>

      </div>
    </div>
  );
}

export default App;


// Link to the website I cloned
// Link: https://www.tesla.com/
