import { useEffect } from "react";
import "./App.css";
import UserInteractivePanel from "./app/components/common/user-interactive-panel/UserInteractivePanel";
import { SCROLL_NOTE_SVG } from "./assets";
import AppRoutes from "./routes/AppRoutes";
import { IBagItem } from "./types/common/types";

const INITIAL_BAG_ITEM: IBagItem[] = [
  {
    name: "Session hero note",
    message:
      "Thank you for checking out my portfolio! As you can see, I'm a huge enthusiast of RPG and fantasy adventure stories. I hope you enjoyed exploring it! I'm truly passionate about how programming can make a positive difference in people's lives. With that in mind, I'm excited to collaborate with you and create something extraordinary together! - Gabriel Max",
    imageSource: SCROLL_NOTE_SVG,
  },
];

function App() {
  useEffect(() => {
    sessionStorage.setItem("BAG_ITEMS", JSON.stringify(INITIAL_BAG_ITEM));
  }, []);

  return (
    <>
      <UserInteractivePanel />
      <AppRoutes />
    </>
  );
}

export default App;
