import foto from './9ca698c2e10fe61210fe9947c5e4be66.gif';
import styled from './index.module.css';

function Home() {
  return (
    <main>
      <header className={ styled.headerHome }>
        <ul>
          <li>Projects</li>
          <li>Github</li>
          <li>E-mail</li>
          <li>Linkedin</li>
        </ul>
      </header>
      <section className={ styled.container1 }>
        <div className={ styled.introduction }>
          <h3>Olá, eu sou José Vitor</h3>
          <h5>E Sou desenvolvedor Front-End</h5>
        </div>
        <div className={ styled.foto }>
          <img src={ foto } alt="" />
        </div>
      </section>
      <section>
        <h1>Sobre mim:</h1>
        <p>
          Nunca tive contato com programação,
          sendo apenas um usuário comum da internet,
          mas sempre tive interesse em entender como essa área funciona
          e como as pessoas que trabalham nela se dedicam.
          Após completar 18 anos, decidi deixar para trás o mundo
          do futebol, onde dedicava meu tempo.
          Agora estou determinado e em busca de me tornar
          um desenvolvedor Front-End cada vez mais habilidoso.
        </p>
      </section>
    </main>
  );
}

export default Home;
