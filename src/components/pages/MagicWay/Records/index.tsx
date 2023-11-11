import React from 'react';

import './styles.scss';

interface Props {
  way?: string
}

const Records = (props: Props) => {

  const { way } = props;

  return (
    <img
      className='records'
      src= {`${process.env.PUBLIC_URL}/assets/magicWays/${way}/records.png`}
      alt='records about magic way'
    />
  )
}

export default Records;