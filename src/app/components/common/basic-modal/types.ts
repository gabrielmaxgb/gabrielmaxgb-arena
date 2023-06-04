export interface IBasicModalProps {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element[] | JSX.Element;
}
