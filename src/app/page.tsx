import CasesSection from '../../components/cases/casesSection';
import ContactButton from '../../components/ContactUs/ContactUs';
import About from '../../components/about/about';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Partnership from '../../components/partnership/partnership';
import Services from '../../components/services/services';
import TechStack from '../../components/techStack/techStack';
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
