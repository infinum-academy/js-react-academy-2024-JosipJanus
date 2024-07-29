import '@fontsource/roboto';
import { extendTheme, Heading } from '@chakra-ui/react';
import { textstyles } from './foundations/textstyles';
import { fonts } from './foundations/fonts';
import { colors } from './foundations/colors';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                height: '100%',
            },
        },
    },
    textStyles: textstyles,
    colors: colors,
    fonts: fonts,
});

export default theme;
