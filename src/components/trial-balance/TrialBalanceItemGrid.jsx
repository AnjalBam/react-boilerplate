import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

const TrialBalanceItemGrid = ({
    as = "h6",
    isBold = false,
    titleCentered = true,
    title = "",
    CrAmount = 0.0,
    DrAmount = 0.0,
    Component = null,
    showTitle = true,
    ...props
}) => {
    return (
        <Grid
            gridTemplateColumns={"repeat(3, 1fr)"}
            alignItems={"center"}
            fontSize={"sm"}
            {...props}
        >
            {/* Title */}
            {showTitle && (
                <Box
                    gridColumn={"1 / 2"}
                    textAlign={titleCentered ? "center" : "left"}
                >
                    <Heading
                        as={as}
                        size="sm"
                        fontWeight={isBold ? "bold" : "normal"}
                        pl={4}
                    >
                        {title || "No Title"}
                    </Heading>
                </Box>
            )}

            {/* Balance */}
            <Box gridColumn={"3 / 3"}>
                {Component ? (
                    <Component />
                ) : (
                    <Flex gap={2}>
                        <Text width={"100%"}>{CrAmount}</Text>
                        <Text width={"100%"}>{DrAmount}</Text>
                    </Flex>
                )}
            </Box>
        </Grid>
    );
};

export default TrialBalanceItemGrid;
