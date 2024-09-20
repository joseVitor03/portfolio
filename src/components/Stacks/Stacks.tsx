import { useState } from 'react';
import styled from './index.module.css';
import { arrayFront, arrayBack } from '../../utils/arrayTecnologies';
import { Reveal } from '../Reveal/Reveal';

export default function Stacks() {
  const [stacks, setStacks] = useState('front');
  return (
    <section className={ styled.sectionTecs }>
      <h2 className={ styled.title_tec }>Tecnologias</h2>
      <Reveal key="tecs">
        <div className={ styled.containerBtnsTecs }>
          <button
            onClick={ () => setStacks('front') }
            className={ stacks === 'front' ? styled.btnTecActive : styled.btnTec }
            type="button"
          >
            Front-End
          </button>
          <button
            onClick={ () => setStacks('back') }
            className={ stacks === 'back' ? styled.btnTecActive : styled.btnTec }
            type="button"
          >
            Back-End
          </button>
        </div>
        <div className={ styled.containerTecs }>
          {stacks === 'front' ? arrayFront.map((front) => (
            <div key={ front.id }>
              <img src={ front.photo } alt="" />
              <h4>{front.name}</h4>
            </div>
          )) : arrayBack.map((back) => (
            <div key={ back.id }>
              <img src={ back.photo } alt="" />
              <h4>{back.name}</h4>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
