import {Box, Flex, Heading, VStack} from "@chakra-ui/react";
import PositionControls from "../../commons/positionControls/position-controls.tsx";
import SizeControls from "../../commons/sizeControls/size-controls.tsx";
import WidgetPreview from "../widgetPreview/widget-preview.tsx";

const MobileControls = () => {
    return (
        <Box>
            <Heading size="md" mb={4}>Mobile Button</Heading>
            <Flex gap={8} direction={{ base: 'column', md: 'row' }}>
                <VStack flex={1} spacing={4} align="stretch">
                    <PositionControls type="mobile" />
                    <SizeControls isMobile />
                </VStack>
                <Box flex={1}>
                    <WidgetPreview type="mobile" />
                </Box>
            </Flex>
        </Box>
    )
}

export default MobileControls