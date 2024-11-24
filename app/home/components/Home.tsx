"use client";
import {
  appBarOptions,
  StyledToolbar,
  SyledCardContent,
} from "@/components/GetImport";
import { UserContext } from "@/hooks/api/user-context";
import useTicketAPI from "@/hooks/api/useTicketAPI";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import TrainIcon from "@mui/icons-material/Train";
import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Container,
  Fab,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useContext, useEffect, useState } from "react";

export function HomePage() {
  const router = useRouter();
  const { getTimeline } = useTicketAPI();
  const [user] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [tickets, setTickets] = useState<TicketsEntity[]>([]);

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
      <Grid2 container spacing={2} columns={12} my={10}>
        {tickets.map((ticket) => (
          <Grid2 key={ticket._id} size={{ xs: 12, md: 6 }}>
            <Card variant="outlined" tabIndex={0}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="icons/appIcon.png"
                sx={{
                  objectFit: "fill",
                  width: "100%",
                  height: "50%",
                }}
                onClick={() => router.push(`/ticket/${ticket._id}`)}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  FROM: {ticket.destinationStation} <br />
                  TO: {ticket.sourceStation}
                </Typography>
              </SyledCardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
