export interface TicketEntity {
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
