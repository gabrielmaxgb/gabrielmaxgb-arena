import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IBasicModalProps } from "./types";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.default",
  border: "5px solid rgba(0,0,0,0.6)",
  borderRadius: "8px",
  // boxShadow: 254,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
  children,
}: IBasicModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
