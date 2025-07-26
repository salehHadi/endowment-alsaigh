import React, { useEffect, useState } from "react";
import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../../assets/logoHorizontal.svg";
import burgerIcon from "../../assets/burgerIcon.svg";

const TypographyText = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "6px",
}));

const menuItems = [
  "الرئيسية",
  "أملاك الوقف",
  "مستفيدين الوقف",
  "أعضاء مجلس النظارة",
  "احدث الاخبار",
  "تواصل معنا",
];

export default function AppbarMobile() {
  const [isFixed, setIsFixed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <Box
        sx={{
          position: isFixed ? "fixed" : "static",
          top: isFixed ? 0 : "auto",
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "#fff",
          boxShadow: isFixed ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "box-shadow 0.3s, background 0.3s",
        }}
      >
        <img
          src={burgerIcon}
          alt="menu"
          style={{ height: "18px" }}
          onClick={handleDrawerOpen}
        />
        {/* <ListItemButton>
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
        </ListItemButton> */}
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{ width: 200, padding: "32px 16px" }}
          role="presentation"
          onClick={handleDrawerClose}
        >
          <List>
            {menuItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <TypographyText variant="h6">{text}</TypographyText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{}}>
        <img src={Logo} alt="logo" style={{ height: "50px" }} />
      </Box>
    </>
  );
}
