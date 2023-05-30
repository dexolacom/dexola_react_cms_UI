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
  platfromId?: number;
}

interface CustomIDMarkdownProps {
  children: React.ReactNode;
}
