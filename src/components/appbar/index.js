import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";

export default function Appbar() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      {matches ? <AppbarMobile /> : <AppbarDesktop />}
    </Container>
  );
}
