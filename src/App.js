import './App.css';
import ButtonBasic from './components/ButtonBasic';

function App() {
  return (
    <div className="App">
      <ButtonBasic
         width = "100px"
         height= "50px"
         backgroundColor = "lightblue"
         color="blue"
         text="OK"
      />  
    </div>
  );
}

export default App;
