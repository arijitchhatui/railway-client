"use client";

import { UserContext } from "@/hooks/api/user-context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrainIcon from "@mui/icons-material/Train";
import {
  Box,
  Container,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useContext } from "react";

export function BottomNav() {
  const _pathName = usePathname();
  const { id } = useParams();
  const [user] = useContext(UserContext);

  const bottomNavOptions = [
    {
      value: `/${user.username}`,
      label: "Account",
      icon: <AccountCircleIcon />,
    },
    {
      value: "/train",
      label: "Train",
      icon: <TrainIcon />,
    },
    {
      value: "/ticket",
      label: "Ticket",
      icon: <ConfirmationNumberIcon />,
    },
    {
      value: "/location",
      label: "Location",
      icon: <LocationOnIcon />,
    },
    {
      value: "/home",
      label: "Home",
      icon: <LiveTvIcon />,
    },
  ];

  const pathName = _pathName === `/groups/${id}` ? `/groups` : _pathName;

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: { sm: 65, md: 65 },
      }}
    >
      <Container maxWidth="xs" style={{ padding: 0, margin: 0 }}>
        <Paper elevation={3} sx={{ borderRadius: "none" }}>
          <Stack
            direction="row-reverse"
            spacing={0.5}
            justifyContent="space-between"
          >
            {bottomNavOptions.map((option, idx) => (
              <Stack key={idx}>
                <IconButton href={option.value} LinkComponent={Link}>
                  <Stack
                    direction="column"
                    alignItems="center"
                    alignContent="center"
                    spacing={0}
                    p={1}
                  >
                    <Icon
                      color={pathName === option.value ? "primary" : "action"}
                    >
                      {option.icon}
                    </Icon>
                    <Typography
                      variant="body2"
                      color={
                        pathName === option.value ? "primary" : "textSecondary"
                      }
                      fontSize="0.65rem"
                      fontWeight={200}
                    >
                      {option.label}
                    </Typography>
                  </Stack>
                </IconButton>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
