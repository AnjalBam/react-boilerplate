import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const SidebarFooter = () => {
    return (
        <Flex justify={"space-between"} alignItems={"stretch"}>
            <Flex
                alignItems={"center"}
                py={2}
                px={1}
                gap="1"
                borderRadius={"lg"}
            >
                <Icon as={FaUserAlt} />
                <Text>@anjalbam</Text>
            </Flex>
            <Box width={'10'} mt={2}>
                <Icon
                    as={IoSettingsSharp}
                    _hover={{ bg: "blackAlpha.200" }}
                    boxSize={"10"}
                    p={2}
                    borderRadius={"full"}
                />
            </Box>
        </Flex>
    );
};

export default SidebarFooter;
