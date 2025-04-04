import {useGlobalContext} from "../../hooks/global-provider.tsx";
import {FormControl, FormLabel} from "@chakra-ui/react";
import ButtonGroupControl from "../buttonGroupControl/button-group-control.tsx";
import {horizontalPositionOptions, verticalPositionOptions} from "../../datas/datas.ts";

const PositionControls = ({ type }: { type: 'interface' | 'button' | 'mobile' }) => {
    const { config, updateConfig } = useGlobalContext()

    const positionKey = `${type}Position` as const
    const verticalPositionKey = `${type}VerticalPosition` as const

    return (
        <>
            <FormControl>
                <FormLabel>Horizontal Position</FormLabel>
                <ButtonGroupControl
                    options={horizontalPositionOptions}
                    value={config[positionKey]}
                    onChange={(value) => updateConfig({ [positionKey]: value })}
                />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Vertical Position</FormLabel>
                <ButtonGroupControl
                    options={verticalPositionOptions}
                    value={config[verticalPositionKey]}
                    onChange={(value) => updateConfig({ [verticalPositionKey]: value })}
                />
            </FormControl>
        </>
    )
}

export default PositionControls