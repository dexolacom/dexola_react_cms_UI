import CasesSection from '../../components/Cases/CasesSection';
import ContactButton from '../../components/ContactUs/ContactUs';
import About from '../../pages/about/about';
import Footer from '../../pages/footer/footer';
import Header from '../../pages/header/header';
import Partnership from '../../pages/partnership/partnership';
import Services from '../../pages/services/services';
import TechStack from '../../pages/techStack/techStack';
import RootLayout from './layout';
// import styles from './page.module.css';

export default function Home() {
  return (
    <RootLayout>
      <ContactButton />
      <Header />
      <About />
      <Services />
      <CasesSection />
      <TechStack />
      <Partnership />
      <Footer />
    </RootLayout>
  );
}
