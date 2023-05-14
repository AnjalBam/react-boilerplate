import { extendTheme } from "@chakra-ui/react";
import {styles} from "./styles";
import { Button } from "./components";
import { breakpoints } from "./breakpoints";
import {colors} from "./colors";

export const theme = extendTheme({
    styles,
    colors,
    breakpoints,
    components: {
        Button,
    },
});
