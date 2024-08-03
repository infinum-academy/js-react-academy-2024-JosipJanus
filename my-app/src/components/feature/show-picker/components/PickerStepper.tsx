import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';
import { PickerStep } from './PickerStep';
import { PickedShows } from './PickedShows';

export const PickerStepper = () => {
    const { currentStep, allShows } = useContext(PickerContext);

    if (!allShows) {
        return null;
    }

    if (currentStep < 3) {
        return <PickerStep />;
    } else {
        return <PickedShows />;
    }
};
