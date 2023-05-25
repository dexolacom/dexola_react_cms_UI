import ReactMarkdown from "react-markdown";
import st from "../../pages/platform/id.module.css";

const CustomMarkdown: React.FC<CustomIDMarkdownProps> = ({ children }) => {
  const H3Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <h3 className={st.headText}> {children} </h3>;
  };

  const ULWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ul className={st.action}> {children}</ul>;
  };

  const LIWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <li className={st.actionList}>
        <p className={st.actionListItem}>{children}</p>
      </li>
    );
  };

  const PWrapper: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => {
    return <p className={st.desc}>{children}</p>;
  };

  const components: Record<string, React.ElementType> = {
    h3: H3Wrapper,
    p: PWrapper,
    ul: ULWrapper,
    li: LIWrapper,
  };

  return (
    <ReactMarkdown components={components}>{String(children)}</ReactMarkdown>
  );
};

export default CustomMarkdown;
