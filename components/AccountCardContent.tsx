"use client";

import useAPI from "@/hooks/api/useAPI";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { StyledTypography, SyledCard, SyledCardContent } from "./GetImport";

export default function AccountCardContentPage() {
  const { getTickets } = useAPI();
  const router = useRouter();
  const [tickets, setTickets] = useState<TicketsEntity[]>([]);
  const loadTickets = async () => {
    try {
      const ticket = await getTickets();
      setTickets(ticket);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load tickets");
    }
  };
  useEffect(() => {
    loadTickets();
  }, []); //eslint-disable-line

  return (
    <Grid container spacing={2} columns={12} mb={10}>
      {tickets.map((ticket, idx) => (
        <Grid key={idx} size={{ xs: 12, md: 6 }}>
          <SyledCard variant="outlined" tabIndex={0}>
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
                {ticket.destinationStation}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {ticket.sourceStation}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {ticket.noAdult}
              </StyledTypography>
            </SyledCardContent>
          </SyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
