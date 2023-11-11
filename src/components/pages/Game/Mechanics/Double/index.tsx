import React, { useEffect, useRef, useState } from 'react';

import './styles.scss';

interface Props {
  name: string
}

const Double = (props: Props) => {

  const { name } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const mouseDown = useRef<boolean>(false);

  const [shift, setShift] = useState(50);

  const dragMove = (event: MouseEvent) => {
    const divPos = ref.current?.getBoundingClientRect().x || 0;
    const divSize = ref.current?.offsetWidth || 0;

    if (mouseDown.current) {
      setShift(Math.round((event.screenX - divPos - 2) / divSize * 100))
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', dragMove);

    return () => {
      window.removeEventListener('mousemove', dragMove);
    }
  }, []);

  return (
      <div className='double'>
        <img
          src={`assets/game/mechanics/${name}-first.jpg`}
          className='mechanics__picture double__picture'
        />
        <img
          src={`assets/game/mechanics/${name}-second.jpg`}
          className='mechanics__picture double__picture'
          style={{
            clipPath: `polygon(${shift}% 100%, ${shift}% 0%, 100% 0%, 100% 100%)`
          }}
        />
        <div
          className='double__separator_case'
          ref={ref}
        >        
          <div
            className='double__separator'
            style={{
              left: `${shift}%`
            }}
          />
          <div className="double__blanket"
            onMouseDown={() => (mouseDown.current = true)}
            onMouseUp={() => (mouseDown.current = false)}
            onMouseOut={() => (mouseDown.current = false)}
          />
        </div>
      </div>
  )
}

export default Double;