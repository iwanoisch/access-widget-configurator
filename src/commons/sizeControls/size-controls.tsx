import {useGlobalContext} from "../../hooks/global-provider.tsx";
import { FormControl, FormLabel} from "@chakra-ui/react";
import ButtonGroupControl from "../buttonGroupControl/button-group-control.tsx";

const SizeControls = ({ isMobile = false }: { isMobile?: boolean }) => {
    const { config, updateConfig } = useGlobalContext()
    const sizeKey = isMobile ? 'mobileSize' : 'buttonSize'

    return (
        <FormControl>
            <FormLabel>Button Size</FormLabel>
            <ButtonGroupControl
                options={[
                    { value: 'small', label: 'Small' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'large', label: 'Large' }
                ]}
                value={config[sizeKey]}
                onChange={(value) => updateConfig({ [sizeKey]: value })}
            />
        </FormControl>
    )
}

export default SizeControls