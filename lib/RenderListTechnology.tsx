import st from "../pages/platform/id.module.css";

const RenderListTechnology = ({
  arr,
  title,
}: {
  arr: string[];
  title: string;
}) => {
  return (
    <>
      <div className={st.listContainer}>
        <p className={st.titleList}>{title}</p>
        <div className={st.listContainer2}>
          {arr?.map((el: string, idx: number) => (
            <li className={st.listTechnologyItem} key={idx}>
              <p className={st.itemList}>{el}</p>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default RenderListTechnology;
