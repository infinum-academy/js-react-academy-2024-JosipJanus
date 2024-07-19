import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';

const colors = {
    primary: '#371687',
    secondary: '#8D5CE5',
    darkPrimary: '#1B004C',
    error: '#FF2498',
};

const theme = extendTheme({
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
