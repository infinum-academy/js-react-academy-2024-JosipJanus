import { background, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';

const colors = {
    primary: '#371687',
    secondary: '#8D5CE5',
    darkPrimary: '#1B004C',
    error: '#FF2498',
};

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                display: 'flex',
                backgroundColor: colors.darkPrimary,
            },
        },
    },
    components: {},
    textStyles: {
        xl: {
            fontSize: '32px',
            fontWeight: '500',
            lineHeight: '48px',
        },
    },
    colors,
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Roboto, sans-serif',
    },
});

export default theme;
