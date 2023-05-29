// "use client";
import { useRouter } from "next/router";
import Link from "next/link";

import HeaderSmall from "../../components/HeaderSmall/headerSmall";
import ContactUs from "../../components/ContactUs/ContactUs";

import Footer from "../footer/footer";

import st from "./contain.module.css";
import style from "../../components/commonStyles/commonStyles.module.css";

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
                <div className={style.imageDivContain}></div>
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
