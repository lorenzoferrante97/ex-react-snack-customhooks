// start code

import useToggle from './hooks/useToggle';

function App() {
  const { isOn, toggle } = useToggle(false);

  return (
    <>
      <main id="main">
        <h1>Toggle: {`${isOn}`}</h1>
        <button onClick={toggle}>Cambia valore del toggle</button>
      </main>
    </>
  );
}

export default App;
