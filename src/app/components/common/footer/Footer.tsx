import { Typography } from "@mui/material";
import { FooterContainer } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterContainer
      item
      container
      xs={11}
      md={8}
      flexDirection={"column"}
      alignItems={"start"}
      justifyContent={"center"}
    >
      <Typography m={"0.5rem 0"} variant="h5">
        Gabriel Max Gomes de Bessa
      </Typography>
      <Typography m={"0.5rem 0"} variant="h5">
        +55 61 992796047
      </Typography>
      <Typography m={"0.5rem 0"} variant="h5">
        gmaxgomes@gmail.com
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
