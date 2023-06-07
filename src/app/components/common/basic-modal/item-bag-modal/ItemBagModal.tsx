import { Typography } from "@mui/material";
import { IBagItem } from "../../../../../types/common/types";
import useSessionStorage from "../../../../hooks/use-session-storage/useSessionStorage";
import BasicModal from "../BasicModal";
import { IBasicModalProps } from "../types";
import { ModalContent } from "./ItemBagModalStyled";
import BagItem from "./bag-item/BagItem";

const ItemBagModal = ({ open, handleClose }: IBasicModalProps) => {
  const sessionBagItems = useSessionStorage("BAG_ITEMS");

  const renderBagItems = () => {
    return sessionBagItems.data?.map((item: IBagItem) => {
      return <BagItem key={item.name} item={item} />;
    });
  };

  return (
    <BasicModal open={open} handleClose={() => handleClose(false)}>
      <Typography variant="h5" mb={"1rem"}>
        My items:
      </Typography>
      <ModalContent>{renderBagItems()}</ModalContent>
    </BasicModal>
  );
};

export default ItemBagModal;
