import { useState } from 'react';
import styled from './index.module.css';
import { arrayFront, arrayBack } from '../../utils/arrayTecnologies';
import { Reveal } from '../Reveal/Reveal';

export default function Stacks() {
  const [cardFrontclicked, setCardFrontClicked] = useState(false);
  const [cardBackclicked, setCardBackClicked] = useState(false);
  return (
    <section className={ styled.section_tecs }>
      <h1 className={ styled.title_tec }>Tecnologias</h1>
      <Reveal key="tecs">
        <div className={ styled.container_tecs }>
          <div
            className={ cardFrontclicked ? styled.container_clicked
              : styled.container_not_clicked }
          >
            <h2
              className={ styled.title_front }
              onClick={ () => setCardFrontClicked(!cardFrontclicked) }
            >
              Front-End
            </h2>
            { cardFrontclicked && arrayFront.map((tecFront) => (
              <div key={ tecFront.id } className={ styled.card }>
                <img
                  className={ styled.logo }
                  src={ tecFront.photo }
                  alt={ tecFront.name }
                />
                <h4>{tecFront.name}</h4>
              </div>
            ))}
          </div>

          <div
            className={ cardBackclicked ? styled.container_clicked
              : styled.container_not_clicked }
          >
            <h2
              className={ styled.title_front }
              onClick={ () => setCardBackClicked(!cardBackclicked) }
            >
              Back-End
            </h2>
            { cardBackclicked && arrayBack.map((tecBack) => (
              <div key={ tecBack.id } className={ styled.card }>
                <img
                  className={ styled.logo }
                  src={ tecBack.photo }
                  alt={ tecBack.name }
                />
                <h4>{tecBack.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
