import { Button, Tooltip, Typography, Zoom } from "@mui/material";
import "./App.css";
import { ITEM_BAG_SVG } from "./assets";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Tooltip
        title={<Typography variant="body1">Items</Typography>}
        placement="top"
        arrow
        TransitionComponent={Zoom}
      >
        <Button
          sx={{
            position: "fixed",
            bottom: 10,
            right: 10,
          }}
        >
          <img src={ITEM_BAG_SVG} width={"70px"} />
        </Button>
      </Tooltip>
      <AppRoutes />
    </>
  );
}

export default App;
