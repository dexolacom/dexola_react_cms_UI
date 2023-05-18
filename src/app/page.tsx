import CasesSection from "../../components/Cases/CasesSection";
import ContactButton from "../../components/ContactUs/ContactUs";

import About from "../../pages/about";
import Footer from "../../pages/footer";
import Header from "../../pages/header";
import Partnership from "../../pages/partnership";
import Services from "../../pages/services/services";
import TechStack from "../../pages/techStack";
import RootLayout from "./layout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayout>
      <ContactButton />
      <Header />
      <About />
      <Partnership />
      <Services />
      <TechStack />
      <CasesSection />
      <Footer />
    </RootLayout>
  );
}
