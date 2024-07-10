import { render, screen } from '@testing-library/react';
import { ShowCard } from './ShowCard';

describe('ShowCard', () => {
    const mockShow = {
        id: '1',
        title: 'Tko pjeva zlo ne misli',
        description: 'A story about something or other',
        image_url: 'https://fakeimg.pl/640x480?text=Placeholder',
        average_rating: 5,
    };

    it('should render show card', () => {
        render(<ShowCard {...mockShow} />);
    });

    it('should render show card with title', () => {
        render(<ShowCard {...mockShow} />);
        expect(screen.getByText(mockShow.title)).toBeInTheDocument();
    });

    it('should render rating from mock object', () => {
        const component = render(<ShowCard {...mockShow} />);
        const ratingElem =
            component.container.querySelector('#rating')?.innerHTML;
        expect(ratingElem).toBe('5');
    });
});
