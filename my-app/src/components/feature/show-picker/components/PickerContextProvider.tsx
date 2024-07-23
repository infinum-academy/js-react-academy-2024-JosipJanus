import { getShows } from '@/fetchers/show';
import { IShow } from '@/types/show.type';
import { createContext, useState } from 'react';
import useSWR from 'swr';

interface IPickerContext {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    shows?: Array<IShow>;
    selectedShows: Array<IShow>;
    setSelectedShows: (shows: Array<IShow>) => void;
}

export const PickerContext = createContext<IPickerContext>(
    {} as IPickerContext
);

interface IPickerContextProviderChildren {
    children: React.ReactNode;
}

export const PickerContextProvider = ({
    children,
}: IPickerContextProviderChildren) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);
    const { data: showsResponse } = useSWR('/shows', getShows);

    const shows = showsResponse?.shows;

    return (
        <PickerContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                shows,
                selectedShows,
                setSelectedShows,
            }}
        >
            {children}
        </PickerContext.Provider>
    );
};
