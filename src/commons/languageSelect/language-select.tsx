import {useGlobalContext} from "../../hooks/global-provider.tsx";
import {FormControl, FormLabel, Select} from "@chakra-ui/react";
import {languageOptions} from "../../datas/datas.ts";

const LanguageSelect = () => {
    const { config, updateConfig } = useGlobalContext();

    return (
        <FormControl>
            <FormLabel>Language</FormLabel>
            <Select
                value={config.language}
                onChange={(e) => updateConfig({ language: e.target.value })}
            >
                {languageOptions.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                        {lang.label}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default LanguageSelect;