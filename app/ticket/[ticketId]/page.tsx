"use client";
import { TicketCard } from "@/app/home/components/Ticket";
import useAPI from "@/hooks/api/useAPI";
import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SingleTicket() {
  const { getTicket } = useAPI();
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<TicketsEntity>();

  const loadTicket = async () => {
    try {
      const ticket = await getTicket(ticketId as string);
      console.log(ticket)
      setTicket(ticket);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load ticket!");
    }
  };

  useEffect(() => {
    if (ticketId) loadTicket();
  }, [ticketId]); //eslint-disable-line

  return (
    <>
      {ticket && <TicketCard ticket={ticket} onMutation={() => loadTicket()} />}
    </>
  );
}
