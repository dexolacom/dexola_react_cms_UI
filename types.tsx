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
  technology: {
    marker: string;
    name: string;
  }[];
  description: string;
  paltfornName: string;
  id: number;
}

export interface CasesListProps {
  data: IAttributesItem[];
}
