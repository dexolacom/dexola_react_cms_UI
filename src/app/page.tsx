import ContactButton from '../../components/ContactUs/ContactUs';
import About from '../../pages/about';
import Cases from '../../pages/cases';
import Footer from '../../pages/footer';
import Header from '../../pages/header';
import Partnership from '../../pages/partnership';
import Services from '../../pages/services';
import TechStack from '../../pages/techStack';
import RootLayout from './layout';
// import styles from './page.module.css';

export default function Home() {
  return (
    <RootLayout>
      <ContactButton />
      <Header />
      <h2>Root component Type in APP.js react</h2>
      <About />
      <Cases />
      <Partnership />
      <Services />
      <TechStack />
      <h2
      // className={styles.main}
      >
        test load fonts Kanit
      </h2>
      <Footer />
    </RootLayout>
  );
}
