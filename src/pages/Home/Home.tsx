import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { VscGithub } from 'react-icons/vsc';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { MdOutlineWork } from 'react-icons/md';
import foto from './9ca698c2e10fe61210fe9947c5e4be66.gif';
import styled from './index.module.css';
import { Reveal } from '../../components/Reveal/Reveal';
import Stacks from '../../components/Stacks/Stacks';

function Home() {
  const [textPage, setTextPage] = useState('');
  const [introduction, setIntroduction] = useState(' Olá, eu sou José Vitor');

  const typeWriter = (text: string, i = 0) => {
    if (i < introduction.length) {
      setTextPage(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      typeWriter(introduction);
    }, 1000);
  }, []);
  return (
    <div className={ styled.App }>
      <header className={ styled.headerHome }>
        <nav>
          <a href="/">
            <MdOutlineWork className={ styled.icon } />
            Projetos
          </a>
          <a href="/">
            <VscGithub className={ styled.icon } />
            {' '}
            Github
          </a>
          <a href="/">
            <SiGmail className={ styled.icon } />
            Gmail
          </a>
          <a href="/">
            <FaLinkedin className={ styled.icon } />
            Linkedin
          </a>

        </nav>
      </header>
      <main>
        <AnimatePresence>
          <Reveal>
            <section
              className={ styled.container1 }
            >
              <div className={ styled.introduction }>
                <span className={ styled.blur } />
                <span className={ styled.blur } />
                <h3>
                  {textPage}
                  <br />
                  Sou desenvolvedor
                  <br />
                  <span className={ styled.frontend }>Full-Stack</span>
                </h3>
              </div>
              <div className={ styled.foto }>
                <img src={ foto } alt="" />
              </div>
            </section>
          </Reveal>
          <section className={ styled.aboutMe }>
            <Reveal>
              <h1>Sobre mim:</h1>
              <p>
                Nunca tive contato com programação,
                sendo apenas um usuário comum da internet,
                mas sempre tive interesse em entender como essa área funciona
                e como as pessoas que trabalham nela se dedicam.
                Após completar 18 anos, decidi deixar para trás o mundo
                do futebol, onde dedicava meu tempo.
                Agora estou determinado e em busca de me tornar
                um desenvolvedor Front-End e Back-End cada vez mais habilidoso.
              </p>
            </Reveal>
          </section>
          <Stacks />
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Home;
