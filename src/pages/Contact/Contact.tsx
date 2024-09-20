import { CgMail } from 'react-icons/cg';
import { ImWhatsapp } from 'react-icons/im';
import Header from '../../components/Header/Header';
import styles from './index.module.css';
import Footer from '../../components/Footer/Footer';

export default function Contact() {
  return (
    <main className={ styles.main }>
      <Header />
      <h1>Como entrar em contato comigo:</h1>
      <section className={ styles.containerContact }>
        <div className={ styles.email }>
          <CgMail className={ styles.icon } />
          <h3>Email:</h3>
          <p>jv681033@gmail.com</p>
        </div>
        <div className={ styles.email }>
          <ImWhatsapp className={ styles.icon } />
          <h3>WhatsApp:</h3>
          <p>
            Fale diretamente comigo
            {' '}
            <a className={ styles.link } target="_blank" href="https://wa.me/+61998198413" rel="noreferrer">aqui</a>
          </p>
          <p>(61) 9 98198413</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
