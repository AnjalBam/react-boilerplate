import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Text,
} from "@chakra-ui/react";
import GroupView from "./GroupView";
import useTrialBalanceCOntext from "../../hooks/useTrialBalanceContext";
import { useCallback, useEffect, useState } from "react";
import trialBalanceData from "../../constants/tb-sample.json";
import TrialBalanceItemGrid from "./TrialBalanceItemGrid";
import GroupTitleComponent from "./GroupTitleComponent";

import { aggreGateTotalTrialBalance } from "../../utils/helpers";

const TrialBalance = () => {
    const { trialBalance, setTrialBalance } = useTrialBalanceCOntext();

    const [aggregateTrialBalanceData, setAggregateTrialBalanceData] = useState({
        totalCr: 0.0,
        totalDr: 0.0,
    });

    const updateAggreGateTotalBalanceData = useCallback((categories) => {
        return aggreGateTotalTrialBalance(categories);
    }, []);

    useEffect(() => {
        setTrialBalance(trialBalanceData);
        setAggregateTrialBalanceData(
            updateAggreGateTotalBalanceData(trialBalanceData?.categories)
        );
    }, [setTrialBalance, updateAggreGateTotalBalanceData]);

    const AmountComponent = () => (
        <Box>
            <Text fontWeight={"semibold"} textAlign={"center"} py={4}>
                Closing Balance
            </Text>
            <Flex justifyContent={"space-around"} py={2} textAlign={"right"}>
                <Text fontWeight={"semibold"} width={"100%"} pl={4}>
                    Cr
                </Text>
                <Text fontWeight={"semibold"} width={"100%"} pl={4}>
                    Dr
                </Text>
            </Flex>
        </Box>
    );

    const OverviewComponent = () => {
        const { totalCr, totalDr } = aggregateTrialBalanceData;

        return (
            <Flex justifyContent={"space-around"} py={2} textAlign={"right"}>
                <Text fontWeight={"semibold"} width={"100%"}>
                    Cr. {new Number(totalCr).toFixed(2)}
                </Text>
                <Text fontWeight={"semibold"} width={"100%"}>
                    Dr. {new Number(totalDr).toFixed(2)}
                </Text>
            </Flex>
        );
    };

    return (
        <Box height={"100%"} position="relative">
            <Box borderBottom={"1px"} borderBottomColor={"gray.100"}>
                <TrialBalanceItemGrid
                    Component={AmountComponent}
                    isBold
                    title={"Accounts"}
                    px="2"
                    bg={"brand.500"}
                    color={"white"}
                />
            </Box>
            <Accordion allowMultiple>
                {(trialBalance?.categories || []).map((category, index) => {
                    return (
                        <AccordionItem
                            key={category?.id || index}
                            border="none"
                        >
                            <h2>
                                <AccordionButton
                                    bg="brand.500"
                                    _hover={{ bg: "brand.200" }}
                                    color="white"
                                    gap={2}
                                >
                                    <AccordionIcon />
                                    <GroupTitleComponent
                                        titleCentered={false}
                                        title={category?.name || "N/A"}
                                        data={category?.groups || []}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} pr={0}>
                                <GroupView groups={category?.groups} />
                            </AccordionPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>

            <Box borderTop={"1px"} borderTopColor={"gray.100"}>
                <TrialBalanceItemGrid
                    Component={OverviewComponent}
                    title="Total Of All Accounts"
                    isBold
                    px="2"
                    bg={"brand.500"}
                    color={"white"}
                />
            </Box>
        </Box>
    );
};

export default TrialBalance;
