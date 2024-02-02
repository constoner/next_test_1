export interface itemInterface {
  name: string | any;
  result: string;
  text: string | any;
}

export interface modalInterface {
  title: string;
  content: string;
  closeModal: () => void;
  loading: boolean;
}
