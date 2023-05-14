import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import GroupView from "./GroupView";
import useTrialBalanceCOntext from "../../hooks/useTrialBalanceContext";
import { useEffect } from "react";
import trialBalanceData from "../../constants/tb-sample.json";

const TrialBalance = () => {
    const { trialBalance, setTrialBalance } = useTrialBalanceCOntext();

    useEffect(() => {
        setTrialBalance(trialBalanceData);
    }, [setTrialBalance]);

    return (
        <>
            <Box> Hello</Box>
            <Accordion allowMultiple>
                {(trialBalance?.categories || []).map((category, index) => {
                    return (
                        <AccordionItem key={category?.id || index}>
                            <h2>
                                <AccordionButton
                                    bg="brand.500"
                                    _hover={{ bg: "brand.200" }}
                                    color="white"
                                    gap={2}
                                >
                                    <AccordionIcon />
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        fontWeight={"semibold"}
                                    >
                                        {category?.name || "N/A"}
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} pr={0}>
                                <GroupView groups={category?.groups} />
                            </AccordionPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </>
    );
};

export default TrialBalance;
