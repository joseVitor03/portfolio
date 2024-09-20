import { useParams } from 'react-router-dom';
import styles from './index.module.css';
import { projects } from '../../utils/projects';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Project() {
  const { id } = useParams();

  const [project] = projects.filter((curr) => curr.id === Number(id));

  return (
    <main className={ styles.main }>
      <Header />
      <h1>{project.name}</h1>
      <section className={ styles.containerVideo }>
        { project.video.length > 0 && (
          <video controls>
            <track default kind="captions" srcLang="en" src="SUBTITLE_PATH" />
            <source src={ project.video } type="video/webm" />
            Seu navegador não suporta o vídeo.
          </video>
        )}
      </section>
      <section className={ styles.descriptions }>
        <h3>Stacks Front-End:</h3>
        {project.tecnologiesFront.map((front) => (
          <img key={ front.id } src={ front.logo } alt="" />
        ))}
        {project.typeProject === 'FullStack' && (
          <>
            <h3>Stacks Back-End:</h3>
            {project.tecnologiesBack.map((back) => (
              <img key={ back.id } src={ back.logo } alt="" />
            ))}
          </>
        )}
        <h3>Descrição:</h3>
        <p>{project.description}</p>
      </section>
      <section className={ styles.links }>
        { project.typeProject === 'FullStack' ? (
          <div className={ styles.btns }>
            <a
              target="_blank"
              href={ project.linkRepoFront }
              rel="noreferrer"
            >
              Repositório Front-End
            </a>
            <a
              target="_blank"
              href={ project.linkRepoBack }
              rel="noreferrer"
            >
              Repositório Back-End
            </a>
          </div>
        )
          : (
            <div className={ styles.btns }>
              <a
                target="_blank"
                href={ project.linkRepoFront }
                rel="noreferrer"
              >
                Repositório Projeto
              </a>
            </div>
          )}
      </section>
      <Footer />
    </main>
  );
}
