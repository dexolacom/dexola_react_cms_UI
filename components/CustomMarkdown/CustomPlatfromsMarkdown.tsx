import { AnimatePresence, motion } from 'framer-motion';

import ReactMarkdown from 'react-markdown';

import st from './mardown.module.css';
import ArrowAllCases from '../ArrowAnime/ArrowAllCases';

const CustomPlatformsMarkdown: React.FC<CustomCasesReactMarkdownProps> = ({
  technology,
  children,
  heading,
  subHeading,
  platformId,
  hoveredCard,
}) => {
  const H3Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const currentID = hoveredCard === platformId;

    return (
      <div className={st.arrowContainer}>
        <AnimatePresence>
          <motion.div
            key={platformId}
            className={st.headText}
            initial={{ fontSize: '20px' }}
            animate={{ fontSize: currentID ? '16px' : '20px' }}
            transition={{
              duration: 0,
            }}
          >
            <h3>{heading ? heading : children}</h3>
          </motion.div>

          <ArrowAllCases hoveredCard={hoveredCard} platformId={platformId} />
        </AnimatePresence>
      </div>
    );
  };

  const PWrapper: React.FC<{
    technology?: string[];
    children: React.ReactNode;
    hoveredCard: boolean;
  }> = ({ children }) => {
    const currentID = hoveredCard === platformId;
    const fontSize = currentID ? 14 : 16;
    return (
      <>
        <ul className={st.list}>
          {technology?.map((service: string, index: any) => (
            <li
              key={index}
              className={currentID ? st.listItemHover : st.listItem}
            >
              <div className={st.listBullet}></div>
              {service}
            </li>
          ))}
        </ul>

        <p className={st.headText}>{subHeading}</p>

        <motion.p
          className={currentID ? st.descrHover : st.descr}
          animate={{ fontSize: currentID ? '14px' : '16px' }}
          transition={{
            duration: 0,
          }}
        >
          {children}
        </motion.p>
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

export default CustomPlatformsMarkdown;
