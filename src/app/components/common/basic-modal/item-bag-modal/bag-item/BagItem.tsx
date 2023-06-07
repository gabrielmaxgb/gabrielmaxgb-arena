import { Tooltip, Typography, Zoom } from "@mui/material";
import { BagItemContainer } from "../ItemBagModalStyled";
import { IBagItemProps } from "./types";

const BagItem = ({ item }: IBagItemProps) => {
  return (
    <Tooltip
      title={<Typography variant="body1">{item.message}</Typography>}
      placement="top"
      arrow
      TransitionComponent={Zoom}
    >
      <BagItemContainer>
        <img src={item?.imageSource} alt={item?.name} width={"50px"} />
      </BagItemContainer>
    </Tooltip>
  );
};

export default BagItem;
