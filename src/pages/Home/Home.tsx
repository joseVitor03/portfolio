import foto from '../../utils/images/IMG-20240325-WA0003 (1).jpg';
import styled from './index.module.css';
import { Reveal } from '../../components/Reveal/Reveal';
import Stacks from '../../components/Stacks/Stacks';
import ListProjects from '../../components/ListProjects/ListProjects';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className={ styled.App }>
      <Header />
      <section>
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
            <h2>Sobre mim:</h2>
            <p>
              Nunca tive contato com programação, sendo apenas um usuário
              comum da internet, mas sempre tive interesse em entender como
              essa área funciona e como as pessoas que trabalham nela se
              dedicam. Após completar 18 anos, decidi me aventurar no mundo
              da tecnologia. Tenho experiência em React.js, Next.js, TypeScript,
              Node.js, e estou sempre buscando aprimorar minhas habilidades.
            </p>
          </Reveal>
        </section>
        <Stacks />
        <ListProjects />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
