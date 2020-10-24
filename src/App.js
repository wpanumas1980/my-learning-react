import './App.css';
import ButtonBasic from './components/ButtonBasic';

function App() {
  return (
    <div className="App">
      <ButtonBasic
         width = "100px"
         height= "50px"
         backgroundColor = "lightblue"
         color="red"
         text="Click Me"
      />  
    </div>
  );
}

export default App;
