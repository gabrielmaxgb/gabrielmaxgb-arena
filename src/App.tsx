import { Button, Tooltip, Typography, Zoom } from "@mui/material";
import moneyCollect from "../src/assets/audio/money-collect.mp3";
import "./App.css";
import { FloatButtonsContainer } from "./AppStyled";
import { CONSTRUCTION_DANGER_EXCLAMANTION_SVG, ITEM_BAG_SVG } from "./assets";
import AppRoutes from "./routes/AppRoutes";
import { playAudio } from "./utils/playAudio";

function App() {
  return (
    <>
      <FloatButtonsContainer>
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
          <Button onClick={() => playAudio(moneyCollect)}>
            <img src={ITEM_BAG_SVG} width={"60px"} />
          </Button>
        </Tooltip>
      </FloatButtonsContainer>
      <AppRoutes />
    </>
  );
}

export default App;
