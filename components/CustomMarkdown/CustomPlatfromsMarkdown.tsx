import ReactMarkdown from "react-markdown";
import st from "./mardown.module.css";
import Link from "next/link";

const CustomPlatfromsMarkdown: React.FC<CustomReactMarkdownProps> = ({
  technology,
  children,
  heading,
  subHeading,
  platfromId,
}) => {
  const H3Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <>
        <Link href={`/platforms/${platfromId}`} key={platfromId}>
          <h3 className={st.headText}> {heading ? heading : children}</h3>
        </Link>
      </>
    );
  };

  const PWrapper: React.FC<{
    technology?: string[];
    children: React.ReactNode;
  }> = ({ children }) => {
    return (
      <>
        <ul className={st.list}>
          {technology?.map((service: string, idx: number) => (
            <li className={st.listItem} key={idx}>
              <div className={st.listBullet}></div>
              {service}
            </li>
          ))}
        </ul>
        <p className={st.headText}>{subHeading}</p>
        <p className={st.desc}>{children}</p>
      </>
    );
  };

  const components: Record<string, React.ElementType> = {
    h3: H3Wrapper,
    p: PWrapper,
  };

  return (
    <ReactMarkdown components={components}>{String(children)}</ReactMarkdown>
  );
};

export default CustomPlatfromsMarkdown;
