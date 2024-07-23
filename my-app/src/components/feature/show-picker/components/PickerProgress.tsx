import { Progress } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';

export const PickerProgress = () => {
    const { currentStep, shows } = useContext(PickerContext);

    if (!shows) {
        return null;
    }

    return <Progress value={(currentStep / 3) * 100} />;
};
