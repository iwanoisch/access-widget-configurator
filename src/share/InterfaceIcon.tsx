// InterfaceIcon.tsx
import React from "react";

interface InterfaceIconProps {
    borderColor?: string;
}

const InterfaceIcon: React.FC<InterfaceIconProps> = ({ borderColor = "#136ef8" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="126"
        viewBox="0 0 88 126"
    >
        {/* Sfondo fisso */}
        <rect width="88" height="126" rx="16" fill="#eef0f6"/>

        {/* Bordo superiore */}
        <path
            fill={borderColor}
            d="M6,0H82a6,6,0,0,1,6,6V6a0,0,0,0,1,0,0H0A0,0,0,0,1,0,6V6A6,6,0,0,1,6,0Z"
        />

        {/* Bordo inferiore */}
        <path
            fill={borderColor}
            d="M0,0H88a0,0,0,0,1,0,0V0a6,6,0,0,1-6,6H6A6,6,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
            transform="translate(0 120)"
        />

        {/* Elementi interni (bianchi) */}
        <rect x="7" y="13" width="47" height="7" rx="3.5" fill="#fff"/>
        <rect x="7" y="23" width="60" height="7" rx="3.5" fill="#fff"/>
        <rect x="7" y="33" width="40" height="7" rx="3.5" fill="#fff"/>
    </svg>
);

export default InterfaceIcon;