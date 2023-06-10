import { Tooltip, Typography, Zoom } from "@mui/material";
import { ITEM_TYPES } from "../../../../../contexts/interactive-panel-context/consts";
import { TooltipContent } from "../../../styled-components/StyledComponents";
import { BagItemContainer } from "../ItemBagModalStyled";
import { ItemTooltipContainer } from "./BagItemStyled";
import { IBagItemProps } from "./types";

const BagItem = ({ item }: IBagItemProps) => {
  return (
    <Tooltip
      title={
        <ItemTooltipContainer>
          <Typography mb={"1rem"} variant="body1">
            {item.message}
          </Typography>
          {item.type === ITEM_TYPES.coin && (
            <Typography>
              Current ammount:{" "}
              <Typography variant="h5">{item.ammount}</Typography>
            </Typography>
          )}
        </ItemTooltipContainer>
      }
      placement="top"
      arrow
      TransitionComponent={Zoom}
    >
      <TooltipContent>
        <Typography variant="caption">{item.name}</Typography>
        <BagItemContainer>
          <img src={item?.imageSource} alt={item?.name} width={"50px"} />
        </BagItemContainer>
      </TooltipContent>
    </Tooltip>
  );
};

export default BagItem;
