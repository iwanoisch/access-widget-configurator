import {createContext, useContext, useState} from "react";
import { WidgetConfig, GlobalContextType} from "../types";
import * as React from "react";


export const defaultConfig: WidgetConfig = {
    interfacePosition: 'right',
    interfaceVerticalPosition: 'center',
    interfaceColor: '#4f46e5',
    buttonPosition: 'right',
    buttonVerticalPosition: 'center',
    buttonColor: '#4f46e5',
    buttonSize: 'medium',
    mobilePosition: 'left',
    mobileVerticalPosition: 'center',
    mobileSize: 'small',
    language: 'en'
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [config, setConfig] = useState<WidgetConfig>(defaultConfig);

    const updateConfig = (newConfig: Partial<WidgetConfig>) => {
        setConfig(prev => ({ ...prev, ...newConfig }));
    };

    return (
        <GlobalContext.Provider value={{ config, updateConfig }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
};