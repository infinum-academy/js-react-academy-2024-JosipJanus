import { render } from '@testing-library/react';
import { ShowList } from './ShowList';
import { IShow } from '@/types/show.type';
import { ShowCard } from '../ShowCard/ShowCard';

jest.mock('../ShowCard/ShowCard', () => {
    return { ShowCard: jest.fn().mockReturnValue(null) };
});

describe('ShowList', () => {
    const mockShows: Array<IShow> = [
        {
            id: '1',
            title: 'Tko pjeva zlo ne misli',
            description: 'A story about something or other',
            image_url: 'https://fakeimg.pl/640x480?text=Placeholder',
            average_rating: 5,
        },
        {
            id: '2',
            title: 'The Red Colored Grey Truck',
            description: 'A story about something or other',
            image_url: 'https://fakeimg.pl/640x480?text=Placeholder',
            average_rating: 5,
        },
    ];

    it('should call ShowCard with correct props', () => {
        render(<ShowList shows={mockShows} />);

        expect(ShowCard).toHaveBeenCalledTimes(2);
        expect(ShowCard).toHaveBeenNthCalledWith(1, { ...mockShows[0] }, {});
        expect(ShowCard).toHaveBeenNthCalledWith(2, { ...mockShows[1] }, {});
    });
});
