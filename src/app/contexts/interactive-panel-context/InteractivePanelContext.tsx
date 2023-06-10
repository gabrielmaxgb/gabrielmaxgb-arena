import { createContext, useEffect, useState } from "react";
import { IChildren } from "../../../types/common/types";
import UserInteractivePanel from "../../components/common/user-interactive-panel/UserInteractivePanel";
import { INITIAL_BAG_ITEM } from "./consts";
import { IInteractivePanelContext } from "./types";

export const InteractivePanelContext =
  createContext<IInteractivePanelContext | null>(null);

export const InteractivePanelContextWrapper: ({
  children,
}: IChildren) => JSX.Element = ({ children }: IChildren) => {
  const [isItemBagOpen, setItemBagOpen] = useState<boolean>(false);

  useEffect(() => {
    sessionStorage.setItem("BAG_ITEMS", JSON.stringify(INITIAL_BAG_ITEM));
  }, []);

  const contextValue = {
    isItemBagOpen: isItemBagOpen,
    setItemBagOpen,
  };

  return (
    <InteractivePanelContext.Provider value={contextValue}>
      <UserInteractivePanel
        isItemBagOpen={isItemBagOpen}
        setItemBagOpen={setItemBagOpen}
      />
      {children}
    </InteractivePanelContext.Provider>
  );
};
