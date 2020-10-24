import { useState } from 'react';
import './App.css';
import OuterCard from './components/OuterCard';
import TextContext from './contextVariable/TextContext';

function App() {
  const [bgColor, setbgColor] = useState(true);
  const changeBg = () => { setbgColor(bgColor => !bgColor); }
  const bg = bgColor? "pink":"yellow"; 
  const theme = {
    text: "Click me",
    color: "blue",
    changeBg
  }
  const { text, color } = theme;
  return (
    <div className="App">
      <TextContext.Provider value={theme}>
        <OuterCard
          margin="0 auto"
          width="500px"
          height="250px"
          backgroundColor={bg}
          header={text}
          color={color}
        />
      </TextContext.Provider>
    </div>
  );
}

export default App;
