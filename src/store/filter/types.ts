export type SortItem = {
  id: number;
  title: string;
  property: string;
  asc: boolean;
}

export interface FilterItem {
  categoryId: number;
  sort: SortItem;
  searchValue: string,
}
