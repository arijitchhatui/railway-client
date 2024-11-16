import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TrainIcon from "@mui/icons-material/Train";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Button,
  Container,
  Divider,
  Fab,
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

export default function FooterPage() {
  return (
    <Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              minWidth: { xs: "100%", sm: "60%" },
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Fab variant="extended">
                {" "}
                Train
                <TrainIcon />
              </Fab>
              <Typography color="primary">Join the newsletter</Typography>
              <Typography color="primary" variant="subtitle2">
                Subscribe the weekly updates.....
              </Typography>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Stack direction="row" useFlexGap spacing={1}>
                <TextField
                  id="email"
                  variant="outlined"
                  hiddenLabel
                  label="Your email address"
                  fullWidth
                  size="small"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  slotProps={{
                    htmlInput: {
                      autoComplete: "off",
                      "aria-label": "Enter your email address",
                    },
                  }}
                />
                <Button variant="contained" size="small" sx={{ flexShrink: 0 }}>
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography>Product</Typography>
            <Link color="text.secondary" href="#">
              Features
            </Link>
            <Link color="text.secondary" href="#">
              Test
            </Link>
            <Link color="text.secondary" href="#">
              HighLights
            </Link>
            <Link color="text.secondary" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" href="#">
              Faqs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography>Company</Typography>
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography>Legal</Typography>
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link style={{ color: "#2196f3" }} href="#">
              Privacy policy
            </Link>
            <Typography color="" sx={{ display: "flex", opacity: 0.5 }}>
              {" "}
              &nbsp;•&nbsp;
            </Typography>
            <Link color="" href="#">
              Terms of service
            </Link>
          </div>
          All rights reserved © {new Date().getFullYear()}
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left" }}
          >
            <IconButton
              href="#"
              aria-label="Github"
              size="small"
              sx={{ alignSelf: "center" }}
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="#"
              aria-label="X"
              size="small"
              sx={{ alignSelf: "center" }}
              color="inherit"
            >
              <XIcon />
            </IconButton>
            <IconButton
              href="#"
              aria-label="Facebook"
              size="small"
              sx={{ alignSelf: "center" }}
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
}
