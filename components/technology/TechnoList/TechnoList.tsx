import { IProps } from "../../../types";
import st from "./tech.module.css";



const TechnoList = ({ heading, technology, description }: IProps) => {
  return (
    <>
      <li className={st.list}>
        <h2 className={st.heading}>{heading && heading}</h2>
        <div className={st.tech_comtainer}>
          {technology?.map((item: any, idx: any) => (
            <span className={st.tech_comtainer_item} key={idx}>
              <div
                style={{ backgroundColor: item.marker }}
                className={st.beforColor}
              ></div>
              {item.name}
            </span>
          ))}
        </div>

        <p className={st.desc}>{description}</p>
      </li>
    </>
  );
};

export default TechnoList;
