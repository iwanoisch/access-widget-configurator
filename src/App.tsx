import {Box, ChakraProvider, Flex, Heading, VStack, Text, Card, CardHeader, CardBody} from "@chakra-ui/react";
import {GlobalProvider} from "./hooks/global-provider.tsx";

import {uiTheme} from '../theme';
import {ScriptExport} from "./components/scriptExport/script-export.tsx";
import {ConfigPanel} from "./components/configPanel/config-panel.tsx";

function App() {

    return (
        <ChakraProvider resetCSS={true} theme={uiTheme}>
            <GlobalProvider>
                <Box p={8} maxW="1200px" mx="auto">
                    <VStack spacing={6} align="stretch">
                        <Card>
                            <CardHeader>
                                <Heading size="xl">AccessWidget configurator</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    In this page you can configure the style of the trigger and interface of
                                    accessWidget
                                </Text>
                            </CardBody>
                        </Card>
                        <Flex direction={'column'}>
                            <Box flex={1}>
                                <ConfigPanel/>
                            </Box>
                            <Box flex={1}>
                                <ScriptExport/>
                            </Box>
                        </Flex>
                    </VStack>
                </Box>
            </GlobalProvider>
        </ChakraProvider>
    )
        ;
}

export default App;
