import {Button, ButtonGroup} from "@chakra-ui/react";

interface ButtonGroupControlProps {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
}

const ButtonGroupControl = ({
                                options,
                                value,
                                onChange
                            }: ButtonGroupControlProps) => {
    return (
        <ButtonGroup isAttached variant="outline" size="sm">
            {options.map((option) => (
                <Button
                    key={option.value}
                    isActive={value === option.value}
                    _active={{
                        bg: 'brand.500',
                        color: 'white',
                        borderColor: 'brand.500'
                    }}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default ButtonGroupControl;