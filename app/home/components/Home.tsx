"use client";
import useTicketAPI from "@/hooks/api/useTicketAPI";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import { useEffect, useState } from "react";
import { HomeAppBarPage } from "./HomeAppBar";
import { TicketsPage } from "./Tickets";

export function HomePage() {
  const { getTimeline } = useTicketAPI();
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

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  useEffect(() => {
    loadTimeLine();
  }, []); //eslint-disable-line
  return (
    <>
      <HomeAppBarPage open={open} onToggle={toggleDrawer} />
      <TicketsPage tickets={tickets} />
    </>
  );
}
