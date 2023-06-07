import { Button, Tooltip, Typography, Zoom } from "@mui/material";
import { useState } from "react";
import {
  CONSTRUCTION_DANGER_EXCLAMANTION_SVG,
  ITEM_BAG_SVG,
} from "../../../../assets";
import ItemBagModal from "../basic-modal/item-bag-modal/ItemBagModal";
import { UserInteractivePanelContainer } from "./UserInteractivePanelStyled";

const UserInteractivePanel = () => {
  const [isItemBagOpen, setItemBagOpen] = useState(false);

  return (
    <>
      <UserInteractivePanelContainer>
        <Tooltip
          title={<Typography variant="body1">Under Development</Typography>}
          placement="left"
          arrow
          TransitionComponent={Zoom}
        >
          <Button>
            <img src={CONSTRUCTION_DANGER_EXCLAMANTION_SVG} width={"60px"} />
          </Button>
        </Tooltip>
        <Tooltip
          title={<Typography variant="body1">Items</Typography>}
          placement="left"
          arrow
          TransitionComponent={Zoom}
        >
          <Button onClick={() => setItemBagOpen(true)}>
            <img src={ITEM_BAG_SVG} width={"60px"} />
          </Button>
        </Tooltip>
      </UserInteractivePanelContainer>

      {isItemBagOpen && (
        <ItemBagModal open={isItemBagOpen} handleClose={setItemBagOpen} />
      )}
    </>
  );
};

export default UserInteractivePanel;
