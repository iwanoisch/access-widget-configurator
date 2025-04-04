import { FormControl, FormLabel, Flex, Text } from '@chakra-ui/react'
import {useGlobalContext} from "../../hooks/global-provider.tsx";
import ColorPickerButton from "../colorpickerbutton/color-picker-button.tsx";


const ColorPicker = ({ type }: { type: 'interface' | 'button' }) => {
    const { config, updateConfig } = useGlobalContext()
    const colorKey = `${type}Color` as const

    return (
        <FormControl>
            <FormLabel>{type === 'interface' ? 'Interface' : 'Button'} Color</FormLabel>
            <Flex align="center" gap={3}>
                <ColorPickerButton
                    color={config[colorKey]}
                    onChange={(newColor) => updateConfig({ [colorKey]: newColor })}
                />
                <Text fontFamily="mono" fontSize="sm">{config[colorKey]}</Text>
            </Flex>
        </FormControl>
    )
}

export default ColorPicker