// start code

import useToggle from './hooks/useToggle';
import useDate from './hooks/useDate';

function App() {
  const { isOn, toggle } = useToggle(false);
  const currentDate = useDate();

  return (
    <>
      <main id="main">
        <h1>Toggle: {`${isOn}`}</h1>
        <button onClick={toggle}>Cambia valore del toggle</button>
        <h2>Current date: {`${currentDate.toLocaleString()}`}</h2>
      </main>
    </>
  );
}

export default App;
