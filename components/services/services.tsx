"use client";

import ServiceCard from "../ServiceCard/ServiceCard";
import PageContainer from "../PageContainer/PageWrapper";
import styles from "./styles.module.css";
import styles2 from "../../components/PageContainer/pageContainer.module.css";
import Link from "next/link";

const SERVICES_TITLES: ITypeItem[] = [
  {
    title: "R&D",
    text: "rd",
  },
  {
    title: "How we Work",
    text: "how-we-work",
  },
  {
    title: "Our Process",
    text: "our-process",
  },
];

const Services = () => {
  return (
    <PageContainer title={"Services"} id="Services" isArrow={false}>
      <p className={styles2.contentText}>
        Our expertise covers key blockchain areas, including DeFi, NFT, and
        GameFi solutions development. We specialize in EVM-compatible
        blockchains, such as Ethereum, Binance Chain, Fantom, and Polygon,
        developing and auditing smart contracts of any complexity. We prioritize
        creating user-friendly applications, as we believe that a clear user
        experience is key to success and mass adoption.
      </p>
      <p className={styles2.contentText}>
        In addition to the main services, our R&D team is constantly exploring
        emerging technology areas and building research projects based on them
        to keep Dexola future-proof.
      </p>
      <div className={styles.imagesWrapper}>
        <div className={styles.imagesColumn}>
          <ServiceCard
            imgPath={"/img_1_1_3.png"}
            title={"Smart Contracts Development"}
            color={"#EB3795"}
            id={1}
          />
          <ServiceCard
            imgPath={"/img_3_1_3.png"}
            title={"Blockchain analytics and crypto trading automation tools"}
            color={"#269EC1"}
            id={2}
          />
        </div>
        <div className={styles.imagesColumn}>
          <ServiceCard
            imgPath={"/img_2_1_3.png"}
            title={"Smart Contract Audits"}
            color={"#8642CA"}
            id={3}
          />
          <ServiceCard
            imgPath={"/img_4_1_3.png"}
            title={"White-label Web3 Solutions"}
            color={"#2CC0A6"}
            id={4}
          />
        </div>
      </div>
      <div className={styles.linksBlock}>
        <>
          {SERVICES_TITLES &&
            SERVICES_TITLES.length &&
            SERVICES_TITLES.map((el, idx) => (
              <Link href={`/${el.text}`} key={`${idx}`}>
                <div className={styles.linkItem}>
                  <p className={styles2.mainKatinParagraph}>{el.title}</p>
                  <div className={styles.arrowBlockServ}></div>
                </div>
              </Link>
            ))}
        </>
      </div>
    </PageContainer>
  );
};

export default Services;
