import { useState } from "react";

const useBagItems = () => {
  // TODO: use localstorage instead of this hook
  const [bagItems, setBagItems] = useState<any>([]);
  return {
    bagItems,
    setBagItems,
  };
};

export default useBagItems;
