"use client";

import { TicketsEntity } from "@/hooks/entities/tickets.entities";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Card,
  CardHeader,
  Container,
  Divider,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { deepPurple } from "@mui/material/colors";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TicketCardProps {
  ticket: TicketsEntity;
  onMutation?: () => unknown;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TicketCard = ({ ticket, onMutation }: TicketCardProps) => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1000,
          top: 0,
        }}
      >
        <Container maxWidth="md" style={{ padding: 0, zIndex: 4 }}>
          <Card sx={{ width: "100%", m: 0, p: 0, backgroundColor: "#ff8c4d" }}>
            <CardHeader
              avatar={
                <IconButton onClick={() => router.back()}>
                  <ArrowBackIosNewIcon color="info" />
                </IconButton>
              }
              title={
                <Typography marginLeft={10} fontWeight={500}>
                  TICKET
                </Typography>
              }
            />
          </Card>
          <Card sx={{ p: 2, zIndex: 1000 }}>
            <Stack justifyContent="space-between" direction="row">
              <Icon>
                <Avatar
                  src="/icons/crisLogo.jpeg"
                  alt="App Logo"
                  sx={{ width: 25, height: 25, zIndex:4 }}
                />
              </Icon>
              <Stack direction="row">
                <div className="text-container">
                  <Typography
                    variant="body2"
                    fontWeight={300}
                    className="scroll-text"
                  >
                    IR UNRESERVED TICKETING
                  </Typography>
                </div>
                <Icon>
                  <Avatar
                    src="/icons/new.png"
                    alt="App Logo"
                    sx={{ width: 25, height: 25 , zIndex:4}}
                  />
                </Icon>
              </Stack>
            </Stack>
          </Card>
        </Container>
      </Box>
      <Box padding={1} marginTop={16}>
        <Card key={ticket._id} sx={{ backgroundColor: "#fffc04", p: 1,  }}>
          <Stack>
            <Stack>
              <Typography>HAPPY JOURNEY</Typography>
              <Divider sx={{ mt: 1 }} />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                justifyContent="center"
                textAlign="center"
                marginLeft={8}
              >
                {ticket.ticketType}
              </Typography>
              <Typography
                justifyContent="center"
                textAlign="center"
              ></Typography>
              <Typography textAlign="left">
                {moment(ticket.bookingDate).format("DD/MM/YYYY")}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Rs. 5.00/-</Typography>
              <Typography>9732768080</Typography>
            </Stack>
            <Stack>
              <Typography>UTS NO:{ticket.utsNo}</Typography>
              <Divider />
            </Stack>
            <Stack direction="row" marginTop={1}>
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  mt: 3.5,
                  display: "flex",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                S
              </Avatar>
              <Stack direction="column">
                <Typography marginLeft={0.5}>चंपाहाटी</Typography>
                <Typography marginLeft={0.5}>{ticket.sourceStation}</Typography>
                <Typography marginLeft={0.5}>চম্পাহাটি</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" marginTop={1}>
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  width: 20,
                  height: 20,
                  mt: 3.5,
                }}
              >
                D
              </Avatar>
              <Stack direction="column">
                <Typography marginLeft={0.5}>बालीगंज</Typography>
                <Typography marginLeft={0.5}>
                  {ticket.destinationStation}
                </Typography>
                <Typography marginLeft={0.5}>বালিগঞ্জ</Typography>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Typography>Adult:{ticket.noAdult}</Typography>
              <Typography marginLeft={2}>Child: {ticket.noChild} </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" marginTop={1}>
                <Typography marginTop={3.5} fontWeight={200} fontSize=".85rem">
                  CLASS:
                </Typography>
                <Stack direction="column">
                  <Typography marginLeft={0.5}>द्वितीय</Typography>
                  <Typography marginLeft={0.5}>{ticket.des_class}</Typography>
                  <Typography marginLeft={0.5}>দ্বি:</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" marginTop={1}>
                <Typography marginTop={3.5} fontWeight={200} fontSize=".85rem">
                  TRAIN TYPE:
                </Typography>
                <Stack direction="column">
                  <Typography marginLeft={0.5}>साधारण</Typography>
                  <Typography marginLeft={0.5}>{ticket.trainType}</Typography>
                  <Typography marginLeft={0.5}>সাধারণ</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction="row">
              <Typography>via</Typography>
              <Typography marginLeft={1}>{ticket.via}</Typography>
            </Stack>
            <Divider />
            <Stack direction="row">
              <Typography variant="body2" marginRight={2}>
                SAC:{ticket.sac}
              </Typography>
              <Typography variant="body2">IR:{ticket.ir}</Typography>
            </Stack>
            <Divider />
            <Typography fontWeight={200} variant="body2">
              Journey should commence in 1 hour
            </Typography>
            <Stack direction="row" justifyContent="space-between" marginTop={1}>
              <Typography variant="body2">R27514</Typography>
              <Typography fontWeight={200} variant="body2" marginRight={5}>
                Distance: 15 km
              </Typography>
            </Stack>
            <Typography marginTop={0.5} variant="body2">
              {moment(ticket.bookingDate).format("LLL")}
            </Typography>
          </Stack>
        </Card>
        <Card sx={{ p: 1 }}>
          <Typography variant="body2" color="error" fontSize={11.5}>
            It is recommended not to preform factory reset or change your
            handset whenever you are having valid ticket in the mobile.Click for
            <Link color="info" href="/">
              {" "}
              Changing Handset with Valid Ticket
            </Link>
          </Typography>
          <Typography
            marginTop={1}
            color="error"
            variant="subtitle2"
            fontWeight={300}
            fontSize={12}
          >
            FOR MEDICAL EMERGENCY | FIRST AID. CONTACT TICKET
          </Typography>
          <Typography
            color="error"
            textAlign="center"
            variant="subtitle2"
            fontWeight={300}
            fontSize={12}
          >
            STAFF | GUARD OR DIAL 139
          </Typography>
          <Stack spacing={1}>
            <LoadingButton
              fullWidth
              sx={{ borderRadius: 30, height: 30, backgroundColor: "#fd7150" }}
              variant="contained"
            >
              <Typography variant="body2" fontSize={12}>
                OPEN QR CODE
              </Typography>
            </LoadingButton>
            <LoadingButton
              fullWidth
              sx={{ borderRadius: 30, height: 30, backgroundColor: "#fd7150" }}
              variant="contained"
            >
              <Typography fontSize={12} variant="body2">
                {" "}
                NEXT TRAINS TO BAGHA JATIN F.
              </Typography>
            </LoadingButton>
            <LoadingButton
              fullWidth
              sx={{ borderRadius: 30, height: 30, backgroundColor: "#fd7150" }}
              variant="contained"
              onClick={() => router.back()}
            >
              <Typography fontSize={12} variant="body2">
                {" "}
                OK
              </Typography>
            </LoadingButton>
          </Stack>
        </Card>
      </Box>
    </>
  );
};
