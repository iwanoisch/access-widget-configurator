import {Box, Flex, Heading, VStack} from "@chakra-ui/react";
import PositionControls from "../positionControls/position-controls.tsx";
import ColorPicker from "../colorPicker/color-picker.tsx";
import SizeControls from "../sizeControls/size-controls.tsx";
import WidgetPreview from "../../components/widgetPreview/widget-preview.tsx";

const ButtonControls = () => {
    return (
        <Box>
            <Heading size="md" mb={4}>Button</Heading>
            <Flex gap={8} direction={{ base: 'column', md: 'row' }}>
                <VStack flex={1} spacing={4} align="stretch">
                    <PositionControls type="button" />
                    <ColorPicker type="button" />
                    <SizeControls />
                </VStack>
                <Box flex={1}>
                    <WidgetPreview type="button" />
                </Box>
            </Flex>
        </Box>
    )
}

export default ButtonControls