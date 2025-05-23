import { useEffect, useState } from 'react';

export default function useCustomPointer(customCursor) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = 'none';

    const updatePosition = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return <span style={{ fontSize: '28px', position: 'fixed', top: mousePos.y, left: mousePos.x, zIndex: '999', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>{customCursor}</span>;
}
