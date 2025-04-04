import {

    Card,
    CardBody,
    VStack,
    Divider, Text
} from "@chakra-ui/react";

import MobileControls from "../mobileControls/mobile-Controls.tsx";
import InterfaceControls from "../interfaceControls/interface-controls.tsx";
import ButtonControls from "../../commons/buttonControls/button-controls.tsx";

export const ConfigPanel = () => {
    return (
        <Card variant="outline">
            <CardBody>
                <VStack spacing={6} align="stretch">
                    <Text>
                        Customize the settings below according to your preferences
                    </Text>
                    <Divider />
                    <InterfaceControls />
                    <Divider />
                    <ButtonControls />
                    <Divider />
                    <MobileControls />
                </VStack>
            </CardBody>
        </Card>
    )
};