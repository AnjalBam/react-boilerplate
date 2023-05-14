import {
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Grid,
    GridItem,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";

const BaseLayout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const btnRef = useRef();
    return (
        <Grid
            templateColumns={{ base: "1fr", lg: "2fr 6fr", xl: "1fr 4fr" }}
            gap={"0.5rem"}
        >
            <GridItem
                height={"100vh"}
                bg="brand.500"
                display={{ base: "none", lg: "block" }}
                color={"gray.100"}
            >
                <Sidebar />
            </GridItem>

            <GridItem display={{ base: "block", lg: "none" }}>
                <Button
                    ref={btnRef}
                    colorScheme="teal"
                    onClick={onOpen}
                    position={"absolute"}
                    top={0}
                    left={0}
                >
                    Open
                </Button>

                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <Sidebar />
                    </DrawerContent>
                </Drawer>
            </GridItem>

            <GridItem height={"100vh"} bg="white" p={{ base: "2", lg: "4" }}>
                <Outlet />
            </GridItem>
        </Grid>
    );
};

export default BaseLayout;
