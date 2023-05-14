import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
} from "@chakra-ui/react";

const GroupView = ({ groups }) => {
    const getSubGroups = (group) => {
        return (
            <Box>
                <GroupView groups={group?.children} />
            </Box>
        );
    };
    const getAccounts = (group) => {
        console.log("getAccounts", group?.accounts);
        if (!(group?.accounts || []).length > 0) {
            return <Box>No Accounts</Box>;
        }
        const getAccountRow = (account) => {
            return (
                <Tr key={account?.id}>
                    <Td>{account?.name}</Td>
                    <Td>{account?.debit}</Td>
                    <Td>{account?.credit}</Td>
                </Tr>
            );
        };
        return (
            <TableContainer>
                <Table>
                    <Tbody>
                        {(group?.accounts || []).map((account) =>
                            getAccountRow(account)
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        );
    };
    return (
        <Box>
            <Accordion>
                {groups?.map((group, index) => {
                    return (
                        <AccordionItem key={group?.id || index}>
                            <h2>
                                <AccordionButton px={0}>
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        fontWeight={"semibold"}
                                    >
                                        {group?.name || "N/A"}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} px={0}>
                                {(group?.children || []).length > 0
                                    ? getSubGroups(group)
                                    : getAccounts(group)}
                            </AccordionPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Box>
    );
};

export default GroupView;
