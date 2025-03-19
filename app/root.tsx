import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import createEmotionCache from "~/styles/createEmotionCache";
import theme from "~/styles/theme";

const cache = createEmotionCache();

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Outlet />
          </ThemeProvider>
        </CacheProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
