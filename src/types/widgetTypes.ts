export interface WidgetConfig {
    interfacePosition: WidgetPosition
    interfaceVerticalPosition: WidgetVerticalPosition
    interfaceColor: string
    buttonPosition: WidgetPosition
    buttonVerticalPosition: WidgetVerticalPosition
    buttonColor: string
    buttonSize: WidgetSize
    mobilePosition: mobilePosition
    mobileVerticalPosition: WidgetVerticalPosition
    mobileSize: WidgetSize
    language: string
}

export interface GlobalContextType {
    config: WidgetConfig;
    updateConfig: (newConfig: Partial<WidgetConfig>) => void;
}

export type WidgetPosition = 'left' | 'right';
export type WidgetVerticalPosition = 'top' | 'center' | 'bottom';
export type WidgetSize = 'small' | 'medium' | 'large';
export type mobilePosition = 'left' | 'right';

