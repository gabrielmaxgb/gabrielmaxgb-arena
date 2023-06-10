export interface IInteractivePanelContext {
  isItemBagOpen: boolean;
  setItemBagOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IItemTypes {
  note: string;
  coin: string;
}
