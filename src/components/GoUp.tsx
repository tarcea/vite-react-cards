import { useEffect, useState } from 'react';
import { ImArrowUp } from 'react-icons/im';

const GoUp = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('scroll', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleMouseMove);
    };
  }, []);

  return (
    <>
      {scroll?.y > 30 && (
        <div
          className='fixed bottom-12 right-12 w-16 h-16 bg-violet-400/70 rounded-full text-violet-800 flex items-center justify-center cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
        >
          <ImArrowUp />
        </div>
      )}
    </>
  );
};

export default GoUp;
