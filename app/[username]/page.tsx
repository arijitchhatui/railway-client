import CardContentPage from "@/components/landing/CardContent";
import { Container } from "@mui/material";
import AccountPage from "./components/Account";

export default function Account() {
  return (
    <>
      <AccountPage />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <CardContentPage />
      </Container>
    </>
  );
}
