import { render, screen } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';
import { deleteReviewItem } from '../../../../fetchers/mutators';
import { act } from 'react';
import { swrKeys } from '@/fetchers/swrKeys';
//ASK: How to skip tests in jest?
jest.mock('@/fetchers/mutators', () => ({
    deleteReviewItem: jest.fn().mockResolvedValue(null),
}));

jest.mock('swr', () => ({
    mutate: jest.fn(),
}));

xdescribe('ReviewItem', () => {
    const mockReview = {
        id: '1',
        rating: 2,
        show_id: 1,
        comment: 'Jako dobar film!',
    };

    it('should render review item', () => {
        render(<ReviewItem review={mockReview} />);
        expect(screen.getByTestId('review-item')).toBeInTheDocument();
    });

    it('should render delete button', () => {
        render(<ReviewItem review={mockReview} />);
        expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    it('should render correct review', () => {
        render(<ReviewItem review={mockReview} />);
        expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
    });

    xit('should call onDelete function when delete button is clicked', () => {
        const onDelete = jest.fn();
        render(<ReviewItem review={mockReview} />);
        const deleteButton = screen.getByText('Delete');
        act(() => {
            deleteButton.click();
        });
        expect(deleteReviewItem).toHaveBeenCalledWith(
            swrKeys.deleteReview(mockReview.id)
        );
    });
});
