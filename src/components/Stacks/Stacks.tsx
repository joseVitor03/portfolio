import styled from './index.module.css';
import { arrayTecs } from '../../utils/arrayTecnologies';
import { Reveal } from '../Reveal/Reveal';

export default function Stacks() {
  return (
    <section className={ styled.section_tecs }>
      <h1 className={ styled.title_tec }>Tecnologias</h1>
      <Reveal>
        <div className={ styled.container_tecs }>
          { arrayTecs.map((tec) => (
            <img
              className={ styled.logo }
              key={ tec }
              src={ tec }
              alt={ `logo ${tec}` }
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
