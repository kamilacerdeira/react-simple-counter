import {useState} from 'react';
import { Container } from './styles';
import { GlobalStyle } from './styles/global';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }


  return (
    <>
      <Container>
        <h1>React Simple Counter</h1>
        <h2>{counter}</h2>
        <button onClick={() => increment()}>Increment</button>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
