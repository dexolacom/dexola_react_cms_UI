"use client";

import PageContainer from "../../components/PageContainer/PageWrapper";
import ProcessItem from "./processItem";
import { PROCESS_INFO } from "../../constants/textConstants";
import styles2 from "../../components/PageContainer/pageContainer.module.css";
import styles from "./styles.module.css";

const OurProcess = () => {
  return (
    <PageContainer title={"Our Process"} link={"/#Services"} isArrow={true}>
      <p className={styles2.contentText}>
        Our approach to each project is unique and adaptable. We are flexible in
        pivoting, growing, or removing functionality as needed to hit the moving
        business target. Time and materials, fixed price, and dedicated team are
        core collaboration models we offer.
      </p>
      <p className={styles2.contentText}>Heres an overview of our approach:</p>

      <div className={styles.itemWrapper}>
        {PROCESS_INFO &&
          PROCESS_INFO.length > 0 &&
          PROCESS_INFO.map((item) => (
            <ProcessItem key={item.title} title={item.title} text={item.text} />
          ))}
      </div>
    </PageContainer>
  );
};

export default OurProcess;
