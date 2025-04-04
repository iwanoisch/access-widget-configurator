import { extendTheme } from '@chakra-ui/react';

/*
const config = {
    colors: {
        general: {
            white: '#FFFFFF',
        },
        gray: {
            120: '#E2E4F0',
            123: '#F0F0F0',
            125: '#F2F2F2',
            350: '#DADADA',
            450: '#B3B3B3',
            455: '#808080',
            750: '#4D4D4D',
            850: '#333333',
        },
        red: {
            10: '#FDF4F3',
            100: '#D11E1E',
        },
        primary: {
            5: '#6D79B2',
            10: '#4E5B99',
            20: '#354280',
            25: '#F6F8FD',
            50: '#E9EFFA',
            100: '#051DF0',
            500: '#293465',
            700: '#161D3A',
        },
        secondary: {
            50: '#F0F2F7',
            75: '#FFFFFF',
            85: '#F1F2F7',
            100: '#293465',
            //100: '#051DF0',
            500: '#FFFFFF',
            600: '#DADADA',
            700: '#B3B3B3',
        },
        danger: {
            50: '#F0F2F7',
            75: '#FFFFFF',
            100: '#D11E1E',
            //100: '#051DF0',
            550: '#D11E1E',
            700: '#B3B3B3',
        },
        neutral: {
            75: '#FFFFFF',
            25: '#F8F8F8',
            600: '#494949',
        },
        orange: {
            50: '#FFFAF0',
            400: '#ED8936',
            600: '#C05621',
        },
        groupButtons: {
            100: '#293465',
            550: '#333333',
            600: '#B3B3B3',
            /!*  variants: {
              _active: {
                color: 'green',
              },
            },*!/
        },
    },
};
*/
const config = {

    colors: {
        brand: {
            500: '#4f46e5',
        },
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'semibold',
                borderRadius: 'md',
            },
        },
    },
}
const theme = extendTheme(config, {
    styles: {
        global: {
            body: {
                bg: '#F2F2F2',
            },
        },
    },
    components: {},
});

export const uiTheme = theme;
