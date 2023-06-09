import {
  Button,
  CircularProgress,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import useImagePreloader from "../../../hooks/use-image-preloader/useImagePreloader";
import { GearSetContainer } from "./GearSetStyled";
import { IGearSetProps } from "./types";

const GearSet = ({ head, rightArm, leftArm, body, foot }: IGearSetProps) => {
  const imgPreloader = useImagePreloader([
    head.imgSrc,
    rightArm.imgSrc,
    leftArm.imgSrc,
    body.imgSrc,
    foot.imgSrc,
  ]);

  // console.log("imgPreloader", imgPreloader);

  return (
    <GearSetContainer>
      {imgPreloader ? (
        <>
          <div className="gear-slot"></div>
          <div className="gear-slot">
            <Tooltip
              title={
                <Typography variant="body1">{head.tooltipMessage}</Typography>
              }
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <Button>
                <a href={head.link} target="_blank">
                  <img
                    id={head.itemName}
                    src={head.imgSrc}
                    alt={head.itemName}
                    width="50px"
                  />
                </a>
              </Button>
            </Tooltip>
          </div>
          <div className="gear-slot"></div>
          <div className="gear-slot">
            <Tooltip
              title={
                <Typography variant="body1">
                  {rightArm.tooltipMessage}
                </Typography>
              }
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <Button>
                <a href={rightArm.link} target="_blank">
                  <img
                    id={rightArm.itemName}
                    src={rightArm.imgSrc}
                    alt={rightArm.itemName}
                    width="50px"
                  />
                </a>
              </Button>
            </Tooltip>
          </div>
          <div className="gear-slot">
            <Tooltip
              title={
                <Typography variant="body1">{body.tooltipMessage}</Typography>
              }
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <Button>
                <a href={body.link} target="_blank">
                  <img
                    id={body.itemName}
                    src={body.imgSrc}
                    alt={body.itemName}
                    width="50px"
                  />
                </a>
              </Button>
            </Tooltip>
          </div>
          <div className="gear-slot">
            <Tooltip
              title={
                <Typography variant="body1">
                  {leftArm.tooltipMessage}
                </Typography>
              }
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <Button>
                {/* <a href={leftArm.link} target="_blank"> */}
                <img
                  id={leftArm.itemName}
                  src={leftArm.imgSrc}
                  alt={leftArm.itemName}
                  width="50px"
                />
                {/* </a> */}
              </Button>
            </Tooltip>
          </div>
          <div className="gear-slot"></div>
          <div className="gear-slot">
            <Tooltip
              title={
                <Typography variant="body1">{foot.tooltipMessage}</Typography>
              }
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <Button>
                {/* <a href={foot.link} target="_blank"> */}
                <img
                  id={foot.itemName}
                  src={foot.imgSrc}
                  alt={foot.itemName}
                  width="35px"
                />
                {/* </a> */}
              </Button>
            </Tooltip>
          </div>
          <div className="gear-slot"></div>
        </>
      ) : (
        <CircularProgress />
      )}
      {/* <div className="gear-slot"></div>
      <div className="gear-slot">{head}</div>
      <div className="gear-slot"></div>
      <div className="gear-slot">{rightArm}</div>
      <div className="gear-slot">{body}</div>
      <div className="gear-slot">{leftArm}</div>
      <div className="gear-slot"></div>
      <div className="gear-slot">{foot}</div>
      <div className="gear-slot"></div> */}
    </GearSetContainer>
  );
};

export default GearSet;
