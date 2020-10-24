import './App.css';
import OuterCard from './components/OuterCard';
import TextContext from './contextVariable/TextContext';

function App() {
  const theme = {
    text:"Context",
    color:"black"
}
// const {text} = theme;
  return (
    <div className="App">
      <TextContext.Provider value={theme}>
        <OuterCard
          margin="0 auto"
          width="500px"
          height="250px"
          backgroundColor="lightblue"
          color="red"
          header={theme.text}
        />
      </TextContext.Provider>
    </div>
  );
}

export default App;
