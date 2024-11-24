"use client";

import useTicketAPI from "@/hooks/api/useTicketAPI";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AccountCardContentPage() {
  const { getTickets } = useTicketAPI();
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
      {tickets.map((ticket, ) => (
        <Grid key={ticket._id} size={{ xs: 12, md: 6 }}>
          <Card
            variant="outlined"
            onClick={() => router.push(`/ticket/${ticket._id}`)}
          >
            <CardHeader
              avatar={<Avatar src="/icons/rail.png" alt="User" />}
              title={ticket.sourceStation}
              subheader={moment(ticket.bookingTime).format("DD/MM/YYYY")}
            />
            <CardContent>
              <>
                <Typography gutterBottom variant="caption" component="div">
                  {ticket.destinationStation}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {ticket.sourceStation}
                </Typography>
              </>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
