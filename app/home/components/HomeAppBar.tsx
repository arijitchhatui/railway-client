"use client";

import { appBarOptions, StyledToolbar } from "@/components/GetImport";
import { UserContext } from "@/hooks/api/user-context";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import TrainIcon from "@mui/icons-material/Train";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Fab,
  IconButton,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment, useContext } from "react";

export const HomeAppBarPage = ({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle:() => unknown;
}) => {
  const [user] = useContext(UserContext);
  return (
    <>
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
                    <Button
                      variant="text"
                      color="info"
                      size="small"
                      href={option.route}
                      component={Link}
                    >
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
              <IconButton aria-label="Menu button" onClick={onToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={onToggle}
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
                    <IconButton onClick={onToggle}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  {appBarOptions.map((option, idx) => (
                    <Fragment key={idx}>
                      <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                        <MenuItem
                          sx={{ color: "text.secondary", my: 1 }}
                          href={option.route}
                          component={Link}
                        >
                          {option.label}
                        </MenuItem>
                      </Paper>
                    </Fragment>
                  ))}

                  <Divider sx={{ my: 3 }} />

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
    </>
  );
};
