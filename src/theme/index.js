import { extendTheme } from "@chakra-ui/react";
import {styles} from "./styles";
import { Button } from "./components";

export const theme = extendTheme({
    styles,
    components: {
        Button,
    },
});
