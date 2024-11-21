"use client";
import { appBarOptions, StyledToolbar } from "@/components/GetImport";
import useAPI from "@/hooks/api/useAPI";
import { UserContext } from "@/hooks/api/user-context";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import TrainIcon from "@mui/icons-material/Train";
import { AppBar, Box, Container, Fab, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Fragment, useContext, useEffect, useState } from "react";
import { TicketCard } from "./Ticket";

export function HomePage() {
  const [tickets, setTickets] = useState<TicketsEntity[]>([]);
  const { getTimeline } = useAPI();
  const [open, setOpen] = useState(false);
  const [user] = useContext(UserContext);

  const loadTimeLine = async () => {
    try {
      const ticket = await getTimeline();
      setTickets(ticket);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    loadTimeLine();
  }, []); //eslint-disable-line
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
    {tickets.map((ticket) => <TicketCard key={ticket._id} ticket={ticket}/>)}
    </>

  );
}
