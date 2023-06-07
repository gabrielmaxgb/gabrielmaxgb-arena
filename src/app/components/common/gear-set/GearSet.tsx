import { GearSetContainer } from "./GearSetStyled";
import { IGearSetProps } from "./types";

const GearSet = ({ head, rightArm, leftArm, body, foot }: IGearSetProps) => {
  return (
    <GearSetContainer>
      <div className="gear-slot"></div>
      <div className="gear-slot">{head}</div>
      <div className="gear-slot"></div>
      <div className="gear-slot">{rightArm}</div>
      <div className="gear-slot">{body}</div>
      <div className="gear-slot">{leftArm}</div>
      <div className="gear-slot"></div>
      <div className="gear-slot">{foot}</div>
      <div className="gear-slot"></div>
    </GearSetContainer>
  );
};

export default GearSet;
