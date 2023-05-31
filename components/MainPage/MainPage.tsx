import ContactButton from '../ContactUs/ContactUs';
import About from '../about/about';
import CasesSection from '../cases/casesSection';
import Footer from '../footer/footer';
import Header from '../header/header';
import Partnership from '../partnership/partnership';
import Services from '../services/services';
import TechStack from '../techStack/techStack';

export default function MainPage() {
  return (
    <>
      <ContactButton />
      <Header />
      <About />
      <Services />
      <CasesSection />
      <TechStack />
      <Partnership />
      <Footer />
    </>
  );
}
