"use client";

import { SyledCardContent } from "@/components/GetImport";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import { Card, CardMedia, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const TicketsPage = ({ tickets }: { tickets: TicketsEntity[] }) => {
  const router = useRouter();
  return (
    <>
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
                  FROM: {ticket.destinationStation.original} <br />
                  TO: {ticket.sourceStation.original}
                </Typography>
              </SyledCardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
