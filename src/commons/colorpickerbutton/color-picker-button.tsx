import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
    Box,
    Flex,
    useDisclosure
} from '@chakra-ui/react'
import {colorsOptions} from "../../datas/datas.ts";

interface ColorPickerButtonProps {
    color: string
    onChange: (color: string) => void
}

const ColorPickerButton = ({ color, onChange }: ColorPickerButtonProps) => {
    const { isOpen, onToggle, onClose } = useDisclosure()

    return (
        <Popover isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
                <Button
                    onClick={onToggle}
                    variant="outline"
                    p={1}
                    height="40px"
                    width="40px"
                    minW="auto"
                >
                    <Box
                        w="100%"
                        h="100%"
                        bg={color}
                        borderRadius="md"
                        border="1px solid"
                        borderColor="gray.200"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent width="200px">
                <PopoverBody p={3}>
                    <Flex wrap="wrap" justifyContent={'space-evenly'} gap={2}>
                        {colorsOptions.map((c) => (
                            <Box
                                key={c}
                                w="30px"
                                h="30px"
                                bg={c}
                                borderRadius="md"
                                cursor="pointer"
                                onClick={() => {
                                    onChange(c)
                                    onClose()
                                }}
                                _hover={{ transform: 'scale(1.1)' }}
                                transition="all 0.2s"
                                border={c === color ? '2px solid' : '1px solid'}
                                borderColor={c === color ? 'blue.500' : 'gray.200'}
                            />
                        ))}
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default ColorPickerButton