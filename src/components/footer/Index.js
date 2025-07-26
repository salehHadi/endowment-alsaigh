import React from "react";
import Logo from "../../assets/logoHorizontal.svg";
import { Container } from "@mui/material";

export default function Index() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "120px",
      }}
    >
      <p
        style={{
          fontSize: "16px",
          maxWidth: "250px",
          textAlign: "center",
        }}
      >
        جميع الحقوق محفوظه لوقف عبدالحميد رجب الصائغ
      </p>
      <img
        src={Logo}
        alt="Footer Logo"
        style={{ width: "250px", height: "auto" }}
      />
    </Container>
  );
}
