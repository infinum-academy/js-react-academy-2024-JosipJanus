import { getShows } from '@/fetchers/show';
import { IShow } from '@/types/show.type';
import { createContext, useEffect, useState } from 'react';
import useSWR from 'swr';

interface IPickerContext {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    allShows: Array<IShow>;
    setAllShows: (shows: Array<IShow>) => void;
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
    const [allShows, setAllShows] = useState<Array<IShow>>([]);
    const { data: showsResponse } = useSWR('/shows', getShows);

    useEffect(() => {
        if (allShows.length === 0) {
            setAllShows(showsResponse?.shows || []);
        }
    }, [showsResponse]);

    const shows = showsResponse?.shows;

    if (!shows?.length) {
        return null;
    }

    return (
        <PickerContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                allShows,
                setAllShows,
                selectedShows,
                setSelectedShows,
            }}
        >
            {children}
        </PickerContext.Provider>
    );
};
