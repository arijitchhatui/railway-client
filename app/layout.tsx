import { UserContextWrapper } from "@/hooks/api/user-context";
import { UserProfilesEntity } from "@/hooks/entities/users.entity";
import { authCookieKey } from "@/library/constants";
import theme from "@/util/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Railway",
  description: "Get your train",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  icons: [
    { rel: "rail-icon", url: "icons/rail2.png" },
    { rel: "icon", url: "icons/rail2.png" },
  ],
} satisfies Metadata;

const validateAuth = async () => {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const accessToken = cookies().get(authCookieKey)?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (
    (res.status === 401 || res.status === 403) &&
    !["/", "/login", "/signup"].includes(pathname)
  ) {
    return redirect("/");
  }

  const user = await res.json();
  return user as UserProfilesEntity;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await validateAuth();
  console.log({ user });
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="generator" content={metadata.generator} />
        <link rel="manifest" href={metadata.manifest} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        {metadata.icons.map(({ rel, url }, idx) => (
          <link key={idx} rel={rel} href={url} />
        ))}
      </head>
      <body className={roboto.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            success: { style: { background: "#000", color: "#fff" } },
            error: { style: { background: "#b33234", color: "#fff" } },
          }}
        />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserContextWrapper user={user}>{children}</UserContextWrapper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
