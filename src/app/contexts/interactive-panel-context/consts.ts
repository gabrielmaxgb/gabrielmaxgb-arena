import { COINS_SVG, SCROLL_NOTE_SVG } from "../../../assets";
import { IBagItem } from "../../../types/common/types";
import { IItemTypes } from "./types";

export const ITEM_TYPES: IItemTypes = {
  coin: "coin",
  note: "note",
};

export const INITIAL_BAG_ITEM: IBagItem[] = [
  {
    name: "Legendary hero's note",
    message:
      "Thank you for checking out my portfolio! As you can see, I'm a huge enthusiast of RPG and fantasy adventure stories. I hope you enjoyed exploring it! I'm truly passionate about how programming can make a positive difference in people's lives. With that in mind, I'm excited to collaborate with you and create something extraordinary together! - Gabriel Max",
    imageSource: SCROLL_NOTE_SVG,
    type: ITEM_TYPES.note,
  },
  {
    name: "Coins",
    ammount: 14,
    message:
      "Aah, your last coins... they're like a dragon's enchanted gaze. It can mesmerize and tempt you, but it's important to resist its allure and make wise choices.",
    imageSource: COINS_SVG,
    type: ITEM_TYPES.coin,
  },
];
