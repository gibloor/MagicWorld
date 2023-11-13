import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import AnimatedCircle from './AnimatedCircle'

interface Props {
  slide: number
  prevSlide: number
  slidesRef: MutableRefObject<(HTMLDivElement | null)[]>
  duration: number
  startPos: number
  finishPos: number
  changeStart: (long:number) => void
  changeFinish: (long:number) => void
}

const Circle = (props: Props) => {

  const {
    slide,
    prevSlide,
    slidesRef,
    duration,
    startPos,
    finishPos,
    changeStart,
    changeFinish
  } = props

  const [staticPos, setStaticPos] = useState(0)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (prevSlide !== slide) {
      let newPos = finishPos

      if (slide > prevSlide) {

        for (let i = prevSlide ; i <= slide ; i++) {
          const width = slidesRef.current[i]?.offsetWidth

          if (width) {
            if (i === 0) {
              newPos += width / 2
            } else if (i === prevSlide) {
              newPos += width / 2 - 50
            } else if (i !== slide) {
              newPos += width
            } else {
              newPos += width / 2 + 50
            }
          }
        }
      } else {
        for (let i = prevSlide ; i >= slide ; i--) {
          const width = slidesRef.current[i]?.offsetWidth

          if (width) {
            if (i === 0) {
              newPos -= width / 2 + 50
            } else if (i === prevSlide) {
              newPos -= width / 2
            } else if (i !== slide) {
              newPos -= width
            } else {
              newPos -= width / 2
            }
          }
        }
      }

      changeStart(finishPos)
      changeFinish(newPos)
    }
  }, [slide])

  useEffect(() => {
    const startPos = slidesRef.current[0]?.offsetWidth || 0
    setStaticPos(startPos / 2 - 25)
  }, [])

  return (
    <AnimatedCircle
      ref={ref}
      className='improvements__circle'
      staticPos={staticPos}
      startPos={startPos}
      finishPos={finishPos}
      duration={duration}
    />
  )
}

export default Circle