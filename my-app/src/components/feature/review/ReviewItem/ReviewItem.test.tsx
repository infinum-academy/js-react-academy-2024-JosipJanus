import { render, screen } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';

fdescribe('ReviewItem', () => {
    const mockReview = {
        email: 'emajl@servis.com',
        id: '1',
        rating: 2,
        review: 'Jako dobar film!',
    };

    it('should render review item', () => {
        render(<ReviewItem review={mockReview} onDelete={() => {}} />);
        expect(screen.getByTestId('review-item')).toBeInTheDocument();
    });

    it('should render delete button', () => {
        render(<ReviewItem review={mockReview} onDelete={() => {}} />);
        expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    it('should render correct email', () => {
        render(<ReviewItem review={mockReview} onDelete={() => {}} />);
        expect(screen.getByText(mockReview.email)).toBeInTheDocument();
    });

    it('should render correct review', () => {
        render(<ReviewItem review={mockReview} onDelete={() => {}} />);
        expect(screen.getByText(mockReview.review)).toBeInTheDocument();
    });

    it('should call onDelete function when delete button is clicked', () => {
        const onDelete = jest.fn();
        render(<ReviewItem review={mockReview} onDelete={onDelete} />);
        const deleteButton = screen.getByText('Delete');
        deleteButton.click();
        expect(onDelete).toHaveBeenCalledWith(mockReview.id);
    });
});
