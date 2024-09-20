import { useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { TbArrowBadgeRightFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { projects } from '../../utils/projects';
import styles from './index.module.css';
import { Reveal } from '../Reveal/Reveal';

export default function ListProjects() {
  const [indexProject, setIndexProject] = useState(0);
  const [previoProject, setPrevioProject] = useState('');

  const changeProject = (id: string) => {
    if (id === 'back') {
      setIndexProject(indexProject - 1);
    } else {
      setIndexProject(indexProject + 1);
    }
    setPrevioProject(id);
  };

  return (
    <Reveal>
      <section className={ styles.containerProjects }>
        <h2>Principais Projetos</h2>
        <div className={ styles.containerProject }>
          <button
            id="back"
            disabled={ indexProject === 0 }
            onClick={ (e) => changeProject(e.currentTarget.id) }
            aria-label="back"
          >
            <IoIosArrowRoundBack
              className={ indexProject === 0
                ? styles.iconBtnDisable : styles.iconBtn }
            />
          </button>
          <div
            key={ projects[indexProject].id }
            className={ previoProject === 'next'
              ? styles.cardNext : styles.cardBefore }
          >
            <img
              className={ styles.imageProject }
              src={ projects[indexProject].image }
              alt="service management"
            />
            <h2>{projects[indexProject].name}</h2>
            <h4 className={ styles.titles }>{projects[indexProject].typeProject}</h4>
            <h4 className={ styles.titles }>Stacks:</h4>
            <div className={ styles.stacksProject }>
              { projects[indexProject].tecnologiesFront.map((stack) => (
                <img
                  key={ stack.id }
                  src={ stack.logo }
                  alt="tecnologia"
                />
              ))}
            </div>
            <div className={ styles.details }>
              <Link
                className={ styles.link }
                to={ `/projects/${projects[indexProject].id}` }
              >
                Mais detalhes
              </Link>
              <TbArrowBadgeRightFilled />
            </div>
          </div>
          <button
            id="next"
            aria-label="next"
            disabled={ indexProject === (projects.length - 1) }
            onClick={ (e) => changeProject(e.currentTarget.id) }
          >
            <IoIosArrowRoundForward
              className={ indexProject === (projects.length - 1)
                ? styles.iconBtnDisable : styles.iconBtn }
            />
          </button>
        </div>
      </section>
    </Reveal>
  );
}
