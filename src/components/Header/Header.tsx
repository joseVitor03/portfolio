import { VscGithub } from 'react-icons/vsc';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from './index.module.css';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const changeRoute = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    if (id !== location.pathname) {
      navigate(id);
    }
    e.preventDefault();
  };
  console.log('a');

  return (
    <header className={ styled.headerHome }>
      <nav>
        <a
          id="/"
          className={ location.pathname === '/' ? styled.linkDisabled : styled.link }
          onClick={ (e) => changeRoute(e, e.currentTarget.id) }
          href="/"
        >
          <IoMdHome className={ styled.icon } />
          Home
        </a>
        <a className={ styled.link } target="_blank" href="https://github.com/joseVitor03" rel="noreferrer">
          <VscGithub className={ styled.icon } />
          {' '}
          Github
        </a>
        <a
          id="/contact"
          className={ location.pathname === '/contact'
            ? styled.linkDisabled : styled.link }
          onClick={ (e) => changeRoute(e, e.currentTarget.id) }
          href="/"
        >
          <SiGmail className={ styled.icon } />
          Contato
        </a>
        <a className={ styled.link } target="_blank" href="https://www.linkedin.com/in/jose-vitor-dev/" rel="noreferrer">
          <FaLinkedin className={ styled.icon } />
          Linkedin
        </a>

      </nav>
    </header>
  );
}
