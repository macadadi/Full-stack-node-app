import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    error: {
      main: '#FFE6DC',
    },
    ...(mode === 'light' ? {
      primary: {
        main: '#5ACCCC',
      },
      secondary: {
        main: '#335C6E',
        dark: '#CFFAFA'
      },
      text: {
        secondary: '#4AA088',
      }
    } : {
      primary: {
        main: '#5ACCCC',
      },
      secondary: {
        dark: '#4AA088',
        main: '#FFFFFF',
      },
      text: {
        secondary: '#4AA088',
      }
    }),
  },
});

export const ColorModeContext = createContext({ toggleColorMode: () => { } });
export const MUContextProvider = ({ children }: { children: JSX.Element }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
};
