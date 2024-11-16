"use client";

import { Container } from "@mui/material";
import AppAppBar from "./landing/AppBar";
import CardContentPage from "./landing/CardContent";
import Footer from "./landing/Footer";
import GridContentPage from "./landing/GridContent";

export function LandingPage() {
  return (
    <>
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <CardContentPage />
        <GridContentPage />
      </Container>
      <Footer />
    </>
  );
}
