import { Global, MantineProvider } from "@mantine/core";

import Home from "@pages/Home";
import plusjakartasans from "./fonts/PlusJakartaSans.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Plus Jakarta Sans",
            src: `url("${plusjakartasans}") format("truetype")`,
          },
        },
      ]}
    />
  );
};

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: { xs: "23.4375em", sm: "48em", xl: "90em" },
        fontFamily: "Plus Jakarta Sans, sans-serif",
        colors: {
          dustedPeri: [
            "#F0F0F6",
            "#E0E2ED",
            "#D1D3E3",
            "#C2C4DA",
            "#A3A7C8",
            "#8589B5",
            "#666CA3",
            "#525682",
            "#3D4162",
            "#292B41",
          ],
          deadlyDepths: [
            "#E7E8EC",
            "#D0D1D9",
            "#B8BAC5",
            "#A1A3B2",
            "#71748C",
            "#424665",
            "#13183F",
            "#0F1332",
            "#0B0E26",
            "#080A19",
          ],
          topShelf: [
            "#F3F3F5",
            "#E6E7EB",
            "#DADBE1",
            "#CDCFD7",
            "#B5B6C2",
            "#9C9EAE",
            "#83869A",
            "#696B7B",
            "#4F505C",
            "#34363E",
          ],
          flamboyantFlamingo: [
            "#FEEDF2",
            "#FDDAE6",
            "#FDC8D9",
            "#FCB5CC",
            "#FA91B3",
            "#F96C99",
            "#F74780",
            "#C63966",
            "#942B4D",
            "#631C33",
          ],
          taffyPink: [
            "#FFF6F9",
            "#FFEDF3",
            "#FFE5ED",
            "#FFDCE7",
            "#FFCADB",
            "#FFB9CF",
            "#FFA7C3",
            "#CC869C",
            "#996475",
            "#66434E",
          ],
        },
      }}
    >
      <GlobalStyles />
      <Home />
    </MantineProvider>
  );
};

export default App;
