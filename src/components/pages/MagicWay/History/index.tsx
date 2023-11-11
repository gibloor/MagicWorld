import React, { useState } from 'react';
import classNames from 'classnames';

import './styles.scss';

interface Props {
  way?: string,
}

const History = (props: Props) => {
  const { way } = props;

  const [itemShown, setItemShown] = useState(0);

  const items = ['start', 'facts', 'popularity'];

  const changeItem = (index:number) => {
    setItemShown(index);
  }

  return (
    <div className='history'>
      <div className='history__case'>
        <div className='history__titles'>
          {items.map((item, index) => (
            <div key={item}
            className={classNames(
              {'history__title': true},
              {'history__title_choosed': index === itemShown}
            )}
            onClick={() => changeItem(index)}>
              <span className='text_title'>
                {item}
              </span>
            </div>
          ))}
        </div>
        {items.map((item, index) => (
          <div key={item}
            className={classNames(
              {'history__content': true},
              {'history__content_shown': index === itemShown}
            )}
          >
            <img className='history__picture' src={`/MagicWorld/assets/magicWays/${way}/history/${item}.jpg`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default History;