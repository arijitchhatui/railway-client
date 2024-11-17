"use client";

import { appBarOptions } from "@/components/GetImport";
import { UserContext } from "@/hooks/api/user-context";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import TrainIcon from "@mui/icons-material/Train";
import { Fab, Paper, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment, useContext, useState } from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
}));

export default function AccountPage() {
  const [open, setOpen] = useState(false);
  const [user] = useContext(UserContext);
  // const { id } = useParams();
  // const pathname = usePathname();

  // const pathName =
  //   pathname === `/${user.username}/${id}` ? `${user.username}` : pathname;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Fab variant="extended">
              <TrainIcon />
            </Fab>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {appBarOptions.map((option, idx) => (
                <Fragment key={idx}>
                  <Button variant="text" color="info" size="small">
                    {option.label}
                  </Button>
                </Fragment>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">{user.username}</Typography>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {appBarOptions.map((option, idx) => (
                  <Fragment key={idx}>
                    <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                      <MenuItem sx={{ color: "text.secondary", my: 1 }}>
                        {option.label}
                      </MenuItem>
                    </Paper>
                  </Fragment>
                ))}

                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Dark Mode
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Instant Ticket
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
