// "use client";
import { useRouter } from "next/router";
import Link from "next/link";

import st from "./contain.module.css";
import HeaderSmall from "../../components/HeaderSmall/headerSmall";
import Footer from "../footer/footer";
import ContactUs from "../../components/ContactUs/ContactUs";
const PageContainerItem = ({
  title,
  children,
  isGoBack,
}: {
  isGoBack?: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <div className={st.container}>
        <HeaderSmall isWhite={true} />
        <aside className={st.asideBar}>
          {isGoBack && (
            <Link href="/" onClick={handleGoBack}>
              <div className={st.imageContainer}>
                <div className={st.imageDiv}></div>
              </div>
            </Link>
          )}
          <p className={st.title}>{title}</p>
        </aside>
        <div className={st.content}>{children}</div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default PageContainerItem;
