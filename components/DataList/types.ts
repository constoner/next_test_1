export interface itemInterface {
  id: number;
  name: string;
}

export interface dataInterface {
  result: number;
  pages: number;
  page: number;
  items: itemInterface[] | any;
}
