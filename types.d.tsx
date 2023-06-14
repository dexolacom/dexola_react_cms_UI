interface IItem {
  attributes: { services: string[]; summary: string };
  id: number;
}

interface IPlatfrom {
  services: string[];
  summary: string;
  id: number;
}

interface PlatformData {
  id: number;
  attributes: {
    services: string[];
    summary: string;
    network: string[];
    backEnd: string[];
    database: string[];
    blockchain: string[];
    frontEnd: string[];
    infrastructure: string[];
    platformLink: string | null;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    paltformName: string;
    videoLink: string;
  };

  meta: {};
}

interface CustomReactMarkdownProps {
  technology: string[];
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  platformId?: number;
}

interface CustomCasesReactMarkdownProps {
  technology: string[];
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  platformId?: number;
  hoveredCard: number | null | undefined;
}

interface CustomIDMarkdownProps {
  children: React.ReactNode;
}

interface IFooterInfo {
  title: string;
  firstColumn: ITypeItem[];
  secondColumn: ITypeItem[];
}

interface IAuditsContent {
  title: string;
  text: string;
  links: string[];
}

interface ITypeItem {
  title: string;
  text: string;
}

interface IContactButton {
  name: string;
  image_src: string;
  width: number;
  height: number;
  clickHandler: () => void;
}

interface IServicesContent {
  [key: string]: IAuditsContent[];
}

interface ICardHover {
  title: string;
  color: string;
  hoveredId: number | null | undefined;
  id: number;
}

interface IServiceCard {
  imgPath: string;
  title: string;
  color: string;
  id: number;
}

// Variants SVG animation

interface IArrowAllCases {
  hoveredCard: number | null | undefined;
  platformId: number | null | undefined;
}
