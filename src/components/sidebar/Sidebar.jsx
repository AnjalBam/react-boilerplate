import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import { Box, Divider, Flex } from "@chakra-ui/react";

const Sidebar = () => {
    return (
        <Flex direction={"column"} justifyContent={'space-between'} height={"full"} px="2" py="6">
            <Box>
                <SidebarHeader />
                <SidebarBody />
            </Box>
            <Box>
                <Divider />
                <SidebarFooter />
            </Box>
        </Flex>
    );
};

export default Sidebar;
