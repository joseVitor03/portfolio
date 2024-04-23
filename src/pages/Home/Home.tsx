import { VscGithub } from 'react-icons/vsc';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import foto from './9ca698c2e10fe61210fe9947c5e4be66.gif';
import styled from './index.module.css';
import { Reveal } from '../../components/Reveal/Reveal';
import Stacks from '../../components/Stacks/Stacks';

function Home() {
  return (
    <div className={ styled.App }>
      <header className={ styled.headerHome }>
        <nav>
          <a href="/">
            <VscGithub className={ styled.icon } />
            {' '}
            Github
          </a>
          <a href="/">
            <SiGmail className={ styled.icon } />
            Gmail
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jose-vitor-dev/" rel="noreferrer">
            <FaLinkedin className={ styled.icon } />
            Linkedin
          </a>

        </nav>
      </header>
      <main>
        <Reveal key="title">
          <section
            className={ styled.container1 }
          >
            <div className={ styled.introduction }>
              <h3>
                Olá, eu sou José Vitor
                <br />
                Desenvolvedor
                <br />
                <span className={ styled.frontend }>Full Stack</span>
              </h3>
            </div>
            <div className={ styled.foto }>
              <img src={ foto } alt="" />
            </div>
          </section>
        </Reveal>
        <section className={ styled.aboutMe }>
          <Reveal key="about me">
            <h1>Sobre mim:</h1>
            <p>
              Nunca tive contato com programação,
              sendo apenas um usuário comum da internet,
              mas sempre tive interesse em entender como essa área funciona
              e como as pessoas que trabalham nela se dedicam.
              Após completar 18 anos, decidi deixar para trás o mundo
              do futebol, onde dedicava meu tempo.
              Agora estou determinado e em busca de me tornar
              um desenvolvedor Full Stack cada vez mais habilidoso.
            </p>
          </Reveal>
        </section>
        <Stacks />
      </main>
    </div>
  );
}

export default Home;
