"use client";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LoginIcon from "@mui/icons-material/Login";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";

import useAPI from "@/hooks/api/useAPI";
import { UserContext } from "@/hooks/api/user-context";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardHeader,
  Container,
  FormControl,
  Grid2,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const adultOptions = [
  { label: "Adult (1)" },
  { label: "Adult (2)" },
  { label: "Adult (3)" },
  { label: "Adult (4)" },
];
const childOptions = [
  { label: "Child (1)" },
  { label: "Child (2)" },
  { label: "Child (3)" },
  { label: "Child (4)" },
];

const ticketTypeOptions = [{ label: "JOURNEY(J)" }, { label: "RETURN(R)" }];

const trainOptions = [
  { label: "ORDINARY(O)" },
  { label: "MAIL/EXP(M/E)" },
  { label: "SUPERFAST(S)" },
];

const sourceStationOptions = [{ label: "CHAMPAHATI" }];
const destinationStationOptions = [{ label: "kbgb" }];
const viaOptions = [{ label: "CHT-PLF" }];
const classOptions = [{ label: "SECOND" }, { label: "FIRST" }];
export function TicketPage() {
  const router = useRouter();
  const { createTicket } = useAPI();
  const [via, setVia] = useState("");
  const [user] = useContext(UserContext);
  const [noChild, setNoChild] = useState("");
  const [noAdult, setNoAdult] = useState("");
  const [loading, setLoading] = useState(false);
  const [trainType, setTrainType] = useState("");
  const [des_class, setDes_class] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [sourceStation, setSourceStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");

  const handleSubmit = async () => {
    setLoading(false);
    try {
      await createTicket({
        noAdult,
        noChild,
        ticketType,
        des_class,
        trainType,
        via,
        sourceStation,
        destinationStation,
      });
      toast.success("Ticket created successfully...");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create ticket!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        position:"fixed",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <Container maxWidth="md" style={{ padding: 0 }}>
        <Card sx={{ width: "100%", m: 0, p: 0, backgroundColor: "#ff8c4d" }}>
          <CardHeader
            avatar={<Avatar src="/icons/new.png" alt="App Logo" />}
            title={<Typography fontWeight={500}>UTS</Typography>}
            subheader={
              <Typography fontWeight={400} fontSize="0.85rem">
                IR UNRESERVED TICKETING
              </Typography>
            }
            action={
              <>
                <IconButton onClick={() => router.push(`/${user.username}`)}>
                  <LoginIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </>
            }
          />
        </Card>
        <CustomCard variant="outlined" sx={{ padding: 0.5 }}>
          <Box sx={{ backgroundColor: "#ff8c4d", padding: 1, mt: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ConfirmationNumberIcon />
              <Typography fontWeight={500} color="#fff">
                NORMAL BOOKING
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ width: "100%", marginTop: 2 }}>
            <Grid2 container spacing={3} justifyContent="center">
              <Grid2>
                <Paper
                  elevation={3}
                  sx={{
                    height: 50,
                    width: 120,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                  }}
                >
                  <FormControl variant="standard" fullWidth>
                    <Autocomplete
                      disablePortal
                      options={adultOptions}
                      value={{ label: noAdult }}
                      onChange={(e, newNoAdult) =>
                        setNoAdult(newNoAdult?.label || "")
                      }
                      isOptionEqualToValue={(option, value) =>
                        option.label === value?.label
                      }
                      renderInput={(params) => (
                        <TextField
                          label="Adult"
                          variant="standard"
                          {...params}
                        />
                      )}
                    />
                  </FormControl>
                </Paper>
              </Grid2>

              <Grid2>
                <Paper
                  elevation={3}
                  sx={{
                    height: 50,
                    width: 140,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                  }}
                >
                  <FormControl variant="standard" fullWidth>
                    <Autocomplete
                      disablePortal
                      options={childOptions}
                      value={{ label: noChild }}
                      onChange={(e, newNoChild) =>
                        setNoChild(newNoChild?.label || "")
                      }
                      isOptionEqualToValue={(option, value) =>
                        option.label === value?.label
                      }
                      renderInput={(params) => (
                        <TextField
                          label="Child"
                          variant="standard"
                          {...params}
                        />
                      )}
                    />
                  </FormControl>
                </Paper>
              </Grid2>
            </Grid2>

            <Stack spacing={2} mt={2}>
              <Stack direction="row" spacing={2}>
                <FormControl variant="standard" fullWidth>
                  <Autocomplete
                    disablePortal
                    options={trainOptions}
                    value={{ label: trainType }}
                    onChange={(e, newTrainType) =>
                      setTrainType(newTrainType?.label || "")
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.label === value?.label
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Train" variant="standard" />
                    )}
                  />
                </FormControl>

                <FormControl variant="standard" fullWidth>
                  <Autocomplete
                    disablePortal
                    options={classOptions}
                    value={{ label: des_class }}
                    onChange={(e, newClass) =>
                      setDes_class(newClass?.label || "")
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.label === value?.label
                    }
                    renderInput={(params) => (
                      <TextField label="Class" variant="standard" {...params} />
                    )}
                  />
                </FormControl>
              </Stack>

              <Stack direction="row" spacing={2}>
                <FormControl variant="standard" fullWidth>
                  <Autocomplete
                    disablePortal
                    options={ticketTypeOptions}
                    value={{ label: ticketType }}
                    onChange={(e, newTicketType) =>
                      setTicketType(newTicketType?.label || "")
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.label === value?.label
                    }
                    renderInput={(params) => (
                      <TextField
                        label="Ticket Type"
                        variant="standard"
                        {...params}
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant="standard" fullWidth>
                  <Autocomplete
                    disablePortal
                    options={destinationStationOptions}
                    value={{ label: destinationStation }}
                    onChange={(e, newDestinationStation) =>
                      setDestinationStation(newDestinationStation?.label || "")
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.label === value?.label
                    }
                    renderInput={(params) => (
                      <TextField
                        label="Destination"
                        variant="standard"
                        {...params}
                      />
                    )}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl variant="standard" fullWidth>
                  <Autocomplete
                    disablePortal
                    options={viaOptions}
                    value={{ label: via }}
                    onChange={(e, newVia) => setVia(newVia?.label || "")}
                    isOptionEqualToValue={(option, value) =>
                      option.label === value?.label
                    }
                    renderInput={(params) => (
                      <TextField label="Via" variant="standard" {...params} />
                    )}
                  />
                </FormControl>
                <FormControl variant="standard" fullWidth>
                  <Autocomplete
                    disablePortal
                    options={sourceStationOptions}
                    value={{ label: sourceStation }}
                    onChange={(e, newSourceStation) =>
                      setSourceStation(newSourceStation?.label || "")
                    }
                    isOptionEqualToValue={(option, value) =>
                      option.label === value?.label
                    }
                    renderInput={(params) => (
                      <TextField
                        label="Source"
                        variant="standard"
                        {...params}
                      />
                    )}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Box>
        </CustomCard>
        <LoadingButton
          sx={{ mt: 5 }}
          loading={loading}
          startIcon={null}
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          BOOK TICKET
        </LoadingButton>
      </Container>
    </Box>
  );
}
