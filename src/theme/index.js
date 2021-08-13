import { colors } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#f44336",
        },
        secondary: {
            main: "#065fd4",
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
        },
        background: {
            default: colors.common.white,
            paper: colors.common.white,
            dark: "#f4f6f8",
        },
    },
});

export default theme;
