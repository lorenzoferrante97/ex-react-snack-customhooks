import { useState } from 'react';

export default function useToggle(initialValue) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => setIsOn(!isOn);

  return { isOn, toggle };
}
