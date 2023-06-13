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
            className={st.headText}
            initial={{ fontSize: '20px' }}
            animate={{ fontSize: currentID ? '16px' : '20px' }}
            transition={{
              duration: 0,
            }}
          >
            <h3>{heading ? heading : children}</h3>
          </motion.div>

          <AnimatePresence>
            <ArrowAllCases hoveredCard={hoveredCard} platformId={platformId} />
          </AnimatePresence>
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
    return (
      <>
        <ul className={st.list}>
          {technology?.map((service: string, idx: number) => (
            <motion.li
              className={st.listItem}
              key={idx}
              initial={{ borderColor: '#545454', color: '#b3b3b3' }}
              animate={{
                borderColor: currentID ? 'white' : '#545454',
                color: currentID ? 'white' : '#b3b3b3',
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className={st.listBullet}></div>
              {service}
            </motion.li>
          ))}
        </ul>
        <p className={st.headText}>{subHeading}</p>
        <AnimatePresence>
          <motion.p
            className={st.desc}
            initial={{ fontSize: '16px', color: '#b3b3b3' }}
            animate={{
              fontSize: currentID ? '14px' : '16px',
              color: currentID ? 'white' : '#b3b3b3',
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {children}
          </motion.p>
        </AnimatePresence>
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
