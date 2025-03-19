import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { RemixBrowser } from "@remix-run/react";
import { ReactNode, startTransition, useMemo, useState } from "react";
import { hydrateRoot } from "react-dom/client";
import ClientStyleContext from "~/styles/ClientStyleContext";
import createEmotionCache from "~/styles/createEmotionCache";
import theme from "~/styles/theme";

interface ClientCacheProviderProps {
  children: ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  const clientStyleContextValue = useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    [],
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,
    <ClientCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RemixBrowser />
      </ThemeProvider>
    </ClientCacheProvider>,
  );
});
