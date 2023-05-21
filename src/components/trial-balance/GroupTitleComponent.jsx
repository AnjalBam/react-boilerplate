import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import TrialBalanceItemGrid from "./TrialBalanceItemGrid";

import { calculateCrDrAmounts, collectAccounts } from "../../utils/helpers";

const GroupTitleComponent = ({ title, data, ...props }) => {
    const [aggregatedDrAmount, setAggregatedDrAmount] = useState(0.0);
    const [aggregatedCrAmount, setAggregatedCrAmount] = useState(0.0);

    const updateAggregatedAmounts = useCallback((group) => {
        const accounts = collectAccounts(group);
        const { totalCr, totalDr } = calculateCrDrAmounts(accounts);

        setAggregatedCrAmount(totalCr);
        setAggregatedDrAmount(totalDr);

        // console.log({group, "title":group.title, totalCr, totalDr});
    }, []);

    useEffect(() => {
        updateAggregatedAmounts(data);
    }, [updateAggregatedAmounts, data]);

    const OverviewComponent = () => {
        return (
            <Flex justifyContent={"space-around"} py={2} textAlign={"right"}>
                <Text fontWeight={"semibold"} width={"100%"}>
                    Cr. {new Number(aggregatedCrAmount).toFixed(2)}
                </Text>
                <Text fontWeight={"semibold"} width={"100%"}>
                    Dr. {new Number(aggregatedDrAmount).toFixed(2)}
                </Text>
            </Flex>
        );
    };
    return (
        <Box width={"full"} {...props}>
            <TrialBalanceItemGrid
                Component={OverviewComponent}
                title={title || "N/A"}
                isBold
                titleCentered={false}
                bg={"inherit"}
                color={"white"}
                {...props}
            />
        </Box>
    );
};

export default GroupTitleComponent;
