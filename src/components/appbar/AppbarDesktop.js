import React, { useEffect, useState } from "react";
import { Box, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../../assets/logoHorizontal.svg";

const TypographyText = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  textAlign: "center",
}));
export default function AppbarDesktop() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      sx={{
        position: isFixed ? "fixed" : "static",
        top: isFixed ? 10 : "auto",
        left: isFixed && "50%",
        transform: isFixed && "translateX(-50%)",
        width: isFixed ? "80%" : "100%",
        zIndex: 1000,
        background: "#fff",
        boxShadow: isFixed ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        transition: "box-shadow 0.3s, background 0.3s",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isFixed && "4px",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "10px 0",
        }}
      >
        <ListItemButton>
          <TypographyText variant="h6">الرئيسية</TypographyText>
        </ListItemButton>
        <ListItemButton>
          <TypographyText variant="h6">أملاك الوقف</TypographyText>
        </ListItemButton>
        <ListItemButton>
          <TypographyText variant="h6">مستفيدين الوقف</TypographyText>
        </ListItemButton>
        <ListItemButton>
          <TypographyText variant="h6">أعضاء مجلس النظارة</TypographyText>
        </ListItemButton>
        <ListItemButton>
          <TypographyText variant="h6">احدث الاخبار</TypographyText>
        </ListItemButton>

        <ListItemButton>
          <TypographyText variant="h6">تواصل معنا</TypographyText>
        </ListItemButton>
      </Box>

      <Box sx={{}}>
        <img
          src={Logo}
          alt="logo"
          style={{ height: isFixed ? "50px" : "90px" }}
        />
      </Box>
    </Box>
  );
}
