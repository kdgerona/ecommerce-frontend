export type TVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'caption';
export interface IProps {
  variant?: TVariants;
  children?: React.ReactNode;
  className?: string;
}
