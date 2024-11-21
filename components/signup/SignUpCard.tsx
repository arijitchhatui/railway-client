import { LoadingButton } from "@mui/lab";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";

import useAPI from "@/hooks/api/useAPI";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { FacebookIcon, GoogleIcon } from "../CustomIcons";

const Card = styled(MuiCard)(({ theme }) => ({
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

export default function SignUpCard() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [, setValidEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [, setValidPassword] = useState(false);
  const { signup } = useAPI();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await signup({ email, password, fullName });
      window.location.href = "/ticket";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: "flex", md: "none" } }}>Rail Way</Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign up
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          return onSubmit();
        }}
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl fullWidth>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <TextField
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Name"
            autoComplete="Full Name"
            autoFocus
            required
            fullWidth
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={(e) => {
              setValidEmail(
                /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)
              );
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => {
              setValidPassword(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(e.target.value)
              );
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>

        <LoadingButton
          loading={loading}
          startIcon={null}
          type="submit"
          fullWidth
          variant="contained"
          onSubmit={onSubmit}
        >
          Sign up
        </LoadingButton>
        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span>
            <Link href="/login" variant="body2" sx={{ alignSelf: "center" }}>
              Login
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ fontSize: "0.85rem" }}
        >
          Sign up with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FacebookIcon />}
          sx={{ fontSize: "0.85rem" }}
        >
          Sign up with Facebook
        </Button>
      </Box>
    </Card>
  );
}
