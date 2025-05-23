// start code

import useToggle from './hooks/useToggle';
import useDate from './hooks/useDate';
import useCustomPointer from './hooks/useCustomPointer';
import useKeyPress from './hooks/useKeyPress';

function App() {
  const { isOn, toggle } = useToggle(false);
  const currentDate = useDate();
  const customPointer = useCustomPointer('👽');
  const pressedKey = useKeyPress('enter');

  return (
    <>
      <main id="main">
        <h1>Toggle: {`${isOn}`}</h1>
        <button onClick={toggle}>Cambia valore del toggle</button>
        <h2>Current date: {`${currentDate.toLocaleString()}`}</h2>
        {customPointer}
        <h2>Tieni premuto il tasto enter per vedere risultato true</h2>
        <p>Enter pressed? {`${pressedKey}`}</p>
      </main>
    </>
  );
}

export default App;
