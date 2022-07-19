import React, { useState } from 'react';
import classNames from 'classnames';

import factors from './factors';
 
import './styles.scss';

const SpellsFactors = () => {

  const [showingSection, setShowingSection] = useState(factors[0].name);

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
                {'***': section.name === showingSection},
              )}
              onClick={() => setShowingSection(section.name)}
            >
              {section.name}
            </div>
          ))}
        </div>
        <div className='spells-factors__info'>
          <div className='spells-factors__silhouette'>
            <img
              src={`assets/game/spells-factors/silhouette/${showingSection}.png`}
              className={classNames(
                {'spells-factors__silhouette_picture': true},
              )}
            />
            {factors.map(section => (
              section.aspects.map(aspect => (
                <img key={aspect}
                  src={`assets/game/spells-factors/silhouette/${aspect}.png`}
                  className={classNames(
                    {'spells-factors__silhouette_picture': true},
                    {'hide': section.name !== showingSection}
                  )}
                />
              ))
            ))}
          </div>
          <div className='spells-factors__data'>
            {factors.map(section => (
              section.aspects.map(aspect => (
                <div key={aspect}
                  className={classNames(
                    {'spells-factors__data_block': true},
                    {'hide': section.name !== showingSection}
                  )}
                >
                  <img
                    src={`assets/game/spells-factors/icons/${aspect}.png`}
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