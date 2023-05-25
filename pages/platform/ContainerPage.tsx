// "use client";
import { useRouter } from "next/router";
import Link from "next/link";

import st from "./contain.module.css";
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
    <div className={st.container}>
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
  );
};

export default PageContainerItem;
