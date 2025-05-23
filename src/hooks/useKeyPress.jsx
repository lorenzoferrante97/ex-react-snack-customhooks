import { useEffect, useState } from 'react';

export default function useKeyPress(key) {
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.key.toLowerCase() === key && setIsEnterPressed(true);
    });
    document.addEventListener('keyup', (e) => {
      e.key.toLowerCase() === key && setIsEnterPressed(false);
    });
  }, []);

  return isEnterPressed;
}
