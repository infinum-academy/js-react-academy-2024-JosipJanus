import '@fontsource/roboto';
import { extendTheme } from '@chakra-ui/react';
import { textstyles } from './foundations/textstyles';
import { fonts } from './foundations/fonts';
import { colors } from './foundations/colors';

const theme = extendTheme({
    textStyles: textstyles,
    colors: colors,
    fonts: fonts,
});

export default theme;
