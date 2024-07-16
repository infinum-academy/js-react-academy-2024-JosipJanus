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
        expect(screen.getByTestId('show-card')).toBeInTheDocument;
    });

    it('should render show card with title', () => {
        render(<ShowCard {...mockShow} />);
        expect(screen.getByText(mockShow.title)).toBeInTheDocument();
    });

    it('should render rating from mock object', () => {
        render(<ShowCard {...mockShow} />);
        expect(screen.getByTestId('rating').innerHTML).toContain('5/5');
    });
});
