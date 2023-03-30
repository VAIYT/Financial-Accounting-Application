import './App.css';
import { Button, Loading } from '@nextui-org/react';

function App() {
  return (
    <div className="App">
      <Button>{true ? 'SEND': <Loading type="points-opacity" color="currentColor" size="sm" />}</Button>
    </div>
  );
}

export default App;
