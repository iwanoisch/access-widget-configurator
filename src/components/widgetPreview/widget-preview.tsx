import {useGlobalContext} from "../../hooks/global-provider.tsx";
import {Box, Flex} from "@chakra-ui/react";
import InterfaceIcon from "../../share/InterfaceIcon.tsx";
import { IoAccessibility } from "react-icons/io5";
import {sizeMap} from "../../datas/datas.ts";



const WidgetPreview = ({ type }: { type: 'interface' | 'button' | 'mobile' }) => {
    const { config } = useGlobalContext()

    const previewConfig = {
        interface: {
            position: config.interfacePosition,
            verticalPosition: config.interfaceVerticalPosition,
            color: config.interfaceColor,
            size: 'medium',
            borderRadius: 'md'
        },
        button: {
            position: config.buttonPosition,
            verticalPosition: config.buttonVerticalPosition,
            color: config.buttonColor,
            size: config.buttonSize,
            borderRadius: 'full'
        },
        mobile: {
            position: config.mobilePosition,
            verticalPosition: config.mobileVerticalPosition,
            color: config.buttonColor,
            size: config.mobileSize,
            borderRadius: 'full'
        }
    }[type]

    return (
        <Flex
            position="relative"
            h="200px"
            w="100%"
            border="1px dashed"
            borderColor="gray.200"
            borderRadius="md"
            bg={type === 'interface' ? 'gray.50' : 'transparent'}
        >
            <Box
                position="absolute"
                top={
                    previewConfig.verticalPosition === 'top' ? '20px' :
                        previewConfig.verticalPosition === 'center' ? '50%' :
                            'calc(100% - 70px)'
                }
                left={previewConfig.position === 'left' ? '20px' : undefined}
                right={previewConfig.position === 'right' ? '20px' : undefined}
                transform={previewConfig.verticalPosition === 'center' ? 'translateY(-50%)' : undefined}
                bg={previewConfig.color}
                w={sizeMap[previewConfig.size]}
                h={sizeMap[previewConfig.size]}
                borderRadius={previewConfig.borderRadius}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="lg"
                boxShadow="md"
                transition="all 0.2s"
            >
                {type === 'interface' ? (
                   < InterfaceIcon borderColor={config.interfaceColor} />
                ) : (
                    <IoAccessibility />
                )}
            </Box>
        </Flex>
    )

}

export default WidgetPreview