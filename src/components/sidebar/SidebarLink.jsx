import { Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";

const SidebarLink = () => {
    return (
        <LinkBox
            px="4"
            py="2"
            borderRadius={"md"}
            _hover={{ bg: "blackAlpha.200" }}
        >
            <LinkOverlay href="#">
                <Flex alignItems={"center"} gap={"1"}>
                    <Icon as={HiHome} />
                    <Text fontSize="md" fontWeight={"semibold"}>
                        TestLink
                    </Text>
                </Flex>
            </LinkOverlay>
        </LinkBox>
    );
};

export default SidebarLink;
