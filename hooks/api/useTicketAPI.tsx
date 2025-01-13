import { authCookieKey } from "@/library/constants";
import { getCookie } from "cookies-next";
import { CreateTicketInput } from "../entities/tickets.entities";

const useTicketAPI = () => {
  const createTicket = async (input: CreateTicketInput) => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tickets/create`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  };

  const getTickets = async () => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  };

  const getTicket = async (ticketId: string) => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tickets/${ticketId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}
        `,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  };

  const getTimeline = async () => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tickets/timeline`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  };

  const deleteTicket = async (_id: string) => {
    const accessToken = getCookie(authCookieKey);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tickets/${_id}/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  };
  return {
    getTicket,
    getTickets,
    getTimeline,
    createTicket,
    deleteTicket,
  };
};
export default useTicketAPI;
