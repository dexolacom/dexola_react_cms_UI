export interface IAttributes {
  id: number;
  attributes: {
    createdAt: string;
    data: IAttributesItem;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface IAttributesItem {
  technology: Technology[];
  description: string;
  paltfornName: string;

  id: number;
}

export interface CasesListProps {
  data: IAttributesItem[];
}

export interface PlatformDetailData {
  id: number;
  attributes: {
    data: {
      link: string;
      task: string;
      action: string;
      result: string;
      summary: string;
      situation: string;
      actionList: string[];
      categories: string[];
      technology: Technology[];
      description: string;
      paltfornName: string;
      technologyStack: {
        backend: string[];
        network: string[];
        database: string[];
        frontend: string[];
        blockchain: string[];
        infrastructure: string[];
      };
    };
    image: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ServerResponse {
  data: PlatformDetailData[];
  meta: unknown;
}

// platform

export interface PlatformResponse {
  data: PlatformItem[];
}

export interface PlatformItem {
  id: number;
  attributes: {
    data: PlatformData;
  };
}

export interface PlatformData {
  technology: Technology[];
  description: string;
  platformName: string;
}

export interface Technology {
  name: string;
  marker: string;
}
// TechnoList

export interface IProps {
  heading: string;
  description: string;
  technology: Technology[];
}
