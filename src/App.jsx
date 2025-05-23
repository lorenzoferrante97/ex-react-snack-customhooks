// start code

import useToggle from './hooks/useToggle';
import useDate from './hooks/useDate';
import useCustomPointer from './hooks/useCustomPointer';

function App() {
  const { isOn, toggle } = useToggle(false);
  const currentDate = useDate();
  const customPointer = useCustomPointer('👽');

  return (
    <>
      <main id="main">
        <h1>Toggle: {`${isOn}`}</h1>
        <button onClick={toggle}>Cambia valore del toggle</button>
        <h2>Current date: {`${currentDate.toLocaleString()}`}</h2>
        {customPointer}
      </main>
    </>
  );
}

export default App;
