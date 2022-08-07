import React, { useRef, useState } from 'react';

import './styles.scss';

interface Props {
  name: string
}

const Double = (props: Props) => {

  const { name } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const [shift, setShift] = useState(50);

  const moveSeparator = (e: React.MouseEvent<HTMLDivElement>) => {
    const divPos = ref.current?.getBoundingClientRect().x || 0;
    const divSize = ref.current?.offsetWidth || 0;

    console.log()
    setShift(Math.round((e.clientX - divPos - 2) / divSize * 100))
  }

  return (
      <div className='double' ref={ref}>
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
          onMouseDown={(e) => (moveSeparator(e))}
          onClick={(e) => (moveSeparator(e))}
        >        
          <div
            className='double__separator'
            style={{
              left: `${shift}%`
            }}
          />
        </div>
      </div>
  )
}

export default Double;