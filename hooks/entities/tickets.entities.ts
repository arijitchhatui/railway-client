export interface TicketsEntity {
  _id: string;
  userId: string;
  noAdult: number;
  noChild: number;
  ticketType: string;
  des_class: string;
  trainType: string;
  bookingDate: Date;
  utsNo: string;
  via: string;
  sac: string | number;
  ir: string;
  bookingTime: Date;
  sourceStation: {
    original: string;
    hindi: string;
    bengali: string;
  };
  destinationStation: {
    original: string;
    hindi: string;
    bengali: string;
  };
}

export interface CreateTicketInput {
  noAdult: number;
  noChild: number;
  ticketType: string;
  des_class: string;
  trainType: string;
  via: string;
  sourceStation: string;
  destinationStation: string;
}
