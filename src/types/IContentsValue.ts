export interface IContentsValue {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio?: {
    name: string;
    url: string;
  } | null;
  link: string | null;
}
