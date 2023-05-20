import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import TrialBalanceItemGrid from "./TrialBalanceItemGrid";
import GroupTitleComponent from "./GroupTitleComponent";

const GroupView = ({ groups }) => {
    const getSubGroups = (group) => {
        return (
            <Box>
                <GroupView groups={group?.children} />
            </Box>
        );
    };
    const getAccounts = (group) => {
        if (!(group?.accounts || []).length > 0) {
            return <Box>No Accounts</Box>;
        }
        const getAccountRow = (account) => {
            return (
                <>
                    <Box py={2}>
                        <TrialBalanceItemGrid
                            titleCentered={false}
                            title={account?.name}
                            CrAmount={account?.tb_data?.credit_amount || 0.0}
                            DrAmount={account?.tb_data?.debit_amount || 0.0}
                        />
                    </Box>
                </>
            );
        };
        return (
            <Box>
                {(group?.accounts || []).map((account) =>
                    getAccountRow(account)
                )}
            </Box>
        );
    };
    return (
        <Box>
            <Accordion allowMultiple>
                {groups?.map((group, index) => {
                    return (
                        <AccordionItem key={group?.id || index}>
                            <h2>
                                <AccordionButton px={0}>
                                    <AccordionIcon />
                                    {/* <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        fontWeight={"semibold"}
                                    >
                                        {group?.name || "N/A"}
                                    </Box> */}
                                    <GroupTitleComponent
                                        titleCentered={false}
                                        title={group?.name || "N/A"}
                                        data={group || []}
                                        color={"brand.500"}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} pr={0}>
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
