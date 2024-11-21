"use client";

import {
  cardContentChipOptions,
  StyledTypography,
  SyledCard,
  SyledCardContent,
} from "@/components/GetImport";
import { Search } from "@/components/landing/CardContent";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

interface TicketCardProps {
  ticket: TicketsEntity;
  onMutation?: () => unknown;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TicketCard = ({ ticket, onMutation }: TicketCardProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <div>
        <Typography variant="h5" color="primary" gutterBottom>
          Railway
        </Typography>
        <Typography variant="subtitle2" color="primary">
          Stay in the loop with the latest about our products
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 3,
            overflow: "auto",
          }}
        >
          {cardContentChipOptions.map((option, idx) => (
            <Fragment key={idx}>
              <Chip
                size="medium"
                label={option.label}
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              />
            </Fragment>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard variant="outlined" tabIndex={0}>
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {ticket.trainType}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {ticket.destinationStation}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {ticket.sourceStation}
              </StyledTypography>
            </SyledCardContent>
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};
