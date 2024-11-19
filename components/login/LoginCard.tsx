import { LoadingButton } from "@mui/lab";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
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
import { UserContext } from "@/hooks/api/user-context";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
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

export default function InCard() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAPI();
  const [user] = useContext(UserContext);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await login({ email, password });
      window.location.href = `/${user.username}`;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
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
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          return handleSubmit();
        }}
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link
              component="button"
              type="button"
              variant="body2"
              sx={{ alignSelf: "baseline" }}
            >
              Forgot your password?
            </Link>
          </Box>
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
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <LoadingButton
          loading={loading}
          startIcon={null}
          type="submit"
          fullWidth
          variant="contained"
          onSubmit={handleSubmit}
        >
          Login
        </LoadingButton>
        <Typography sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <span>
            <Link href="/signup" variant="body2" sx={{ alignSelf: "center" }}>
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
          Sign in with Google
        </Button>
        <Button fullWidth variant="outlined" startIcon={<FacebookIcon />}>
          Sign in with Facebook
        </Button>
      </Box>
    </Card>
  );
}
