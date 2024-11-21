export interface TicketsEntity {
  _id:string
  userId: string;
  noAdult: string;
  noChild: string;
  ticketType: string;
  des_class: string;
  trainType: string;
  bookingDate: Date;
  utsNo: string;
  via: string;
  sac: string |number;
  ir: string;
  bookingTime: Date;
  sourceStation: string;
  destinationStation: string
}

export interface CreateTicketInput {
  noAdult: number;
  noChild: number;
  ticketType: string;
  des_class: string;
  trainType: string;
  mobileNumber: number;
  via: string;
  charge: number;
}
