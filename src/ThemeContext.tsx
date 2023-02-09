import React, {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { PaletteMode /*useMediaQuery*/ } from "@mui/material";

interface IThemeContext {
  mode: PaletteMode;
  colorMode: {
    toggleColorMode: () => void;
  };
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export default function MyProvider({ children }: PropsWithChildren) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersDarkMode = false;

  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ThemeContext.Provider value={{ mode, colorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
