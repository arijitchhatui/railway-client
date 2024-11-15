"use client";

import { authenticatedPaths } from "@/library/constants";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (![...authenticatedPaths].includes(pathname)) {
    return <>{children}</>;
  }
  return (
    <>
      <Container maxWidth="xs" style={{ padding: 0 }}>
        {children}
      </Container>
    </>
  );
}
