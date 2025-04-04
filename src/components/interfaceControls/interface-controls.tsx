import {Box, Flex, Heading, VStack} from "@chakra-ui/react";
import PositionControls from "../../commons/positionControls/position-controls.tsx";
import ColorPicker from "../../commons/colorPicker/color-picker.tsx";
import LanguageSelect from "../../commons/languageSelect/language-select.tsx";
import WidgetPreview from "../widgetPreview/widget-preview.tsx";

const InterfaceControls = () => {
    return (
        <Box>
            <Heading size="md" mb={4}>Interface</Heading>
            <Flex gap={8} direction={{ base: 'column', md: 'row' }}>
                <VStack flex={1} spacing={4} align="stretch">
                    <PositionControls type="interface" />
                    <ColorPicker type="interface" />
                    <LanguageSelect />
                </VStack>
                <Box flex={1}>
                    <WidgetPreview type="interface" />
                </Box>
            </Flex>
        </Box>
    )
}

export default InterfaceControls