interface IGear {
  tooltipMessage: string;
  link: string;
  imgSrc: string;
  itemName: string;
}

export interface IGearSetProps {
  head: IGear;
  rightArm: IGear;
  body: IGear;
  leftArm: IGear;
  foot: IGear;
}
