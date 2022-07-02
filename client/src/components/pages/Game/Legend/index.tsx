import React from 'react';
import { useInView } from 'react-hook-inview';

import planet from 'components/assets/game/planet.jpg';
import landscape from 'components/assets/game/landscape.jpg';
import caster from 'components/assets/game/caster.jpg';

import './styles.scss';

const Legend = () => {

  const [landscapeRef, landscapeView] = useInView({unobserveOnEnter: true});
  const [casterRef, casterView] = useInView({unobserveOnEnter: true});

  return (
    <div className='legend'>
      <div className='legend__line'>
        <span className='legend__line_text emerging'>
          planet asdasd asdsa dsadasdsa sadasdas asdasd asdasdasdsdfew wdcdefe wefrwet asdfsdd ddd sdsfewf d  sdfsdweqfaldskfel,mre ,d dsf,a. a,fdsf.s, sa.df,s. ,afl,l,fsfrfv krmfmkevmmk mskdfsf f,s,dfls,
        </span>
        <div className='legend__line_picture_case'>
          <img src={planet} className='legend__line_picture emerging' />
        </div>
      </div>
      <div className='legend__line' ref={landscapeRef}>
        {landscapeView &&
          <>
            <div className='legend__line_picture_case'>
              <img src={landscape} className='legend__line_picture emerging' />
            </div>
            <span className='legend__line_text emerging'>
              landscape asdasd asdsa dsadasdsa sadasdas asdasd asdasdasdsdfew wdcdefe wefrwet asdfsdd ddd sdsfewf d  sdfsdweqfaldskfel,mre ,d dsf,a. a,fdsf.s, sa.df,s. ,afl,l,fsfrfv krmfmkevmmk mskdfsf f,s,dfls,
            </span>
          </>
        }
      </div>
      <div className='legend__line' ref={casterRef}>
        {casterView &&
          <>
            <span className='legend__line_text emerging'>
              caster asdasd asdsa dsadasdsa sadasdas asdasd asdasdasdsdfew wdcdefe wefrwet asdfsdd ddd sdsfewf d  sdfsdweqfaldskfel,mre ,d dsf,a. a,fdsf.s, sa.df,s. ,afl,l,fsfrfv krmfmkevmmk mskdfsf f,s,dfls,
            </span>
            <div className='legend__line_picture_case'>
              <img src={caster} className='legend__line_picture emerging' />
            </div>
          </>
        }
      </div>
    </div>
  )
};

export default Legend;