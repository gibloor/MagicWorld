import React, { useState } from 'react';
import classNames from 'classnames';

import factors from './factors';
 
import './styles.scss';

const SpellsFactors = () => {

  const [showSection, setShowSection] = useState(factors[0].name);
  const [showSilhouette, setShowSilhouette] = useState('')

  return (
    <div className='spells-factors'>
      <span className='text_title'>
        SpellsFactors
      </span>

      <div className='spells-factors__case'>
        <div className='spells-factors__buttons'>
          {factors.map(section => (
            <div key={section.name}
              className={classNames(
                {'spells-factors__button button_casual text_title': true},
                {'***': section.name === showSection},
              )}
              onClick={() => setShowSection(section.name)}
            >
              {section.name}
            </div>
          ))}
        </div>
        <div className='spells-factors__info'>
          <div className='spells-factors__silhouette_case'>
            {factors.map(section => (
              <div key={section.name}
                className={classNames(
                  {'hide': section.name !== showSection}
                )}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/game/spells-factors/silhouette/${showSection}.png`}
                  className='spells-factors__silhouette spells-factors__silhouette_basic'
                />
                {section.aspects.map(aspect => (
                  <img key={aspect}
                    src={`${process.env.PUBLIC_URL}/assets/game/spells-factors/silhouette/${aspect}.png`}
                    className={classNames(
                      {'spells-factors__silhouette': true},
                      {'spells-factors__silhouette_standout': aspect === showSilhouette}
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className='spells-factors__data'>
            {factors.map(section => (
              section.aspects.map(aspect => (
                <div key={aspect}
                  className={classNames(
                    {'spells-factors__data_block': true},
                    {'hide': section.name !== showSection}
                  )}
                  onMouseEnter={() => {
                    setShowSilhouette(aspect)
                  }}
                  onMouseLeave={() => {
                    setShowSilhouette('')
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/game/spells-factors/icons/${aspect}.png`}
                    className={classNames(
                      {'spells-factors__data_icon': true},
                    )}
                  />
                  <span>
                    {aspect}
                  </span>
                  <span className='spells-factors__data_description'>
                    description {aspect}
                  </span>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

    </div>
  )
};

export default SpellsFactors;