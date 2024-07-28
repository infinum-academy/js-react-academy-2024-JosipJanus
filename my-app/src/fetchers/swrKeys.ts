const apiUrl = 'https://tv-shows.infinum.academy/';
export const swrKeys = {
    register: `${apiUrl}users`,
    login: `${apiUrl}users/sign_in`,
    topRated: `${apiUrl}shows/top_rated`,
    showDetail: (id: string) => `${apiUrl}shows/${id}`,
    allShows: `${apiUrl}shows`,
    user: `${apiUrl}users/me`,
    postReview: `${apiUrl}reviews`,
    showReviews: (id: string) => `${apiUrl}shows/${id}/reviews`,
    deleteReview: (id: string) => `${apiUrl}reviews/${id}`,
    updateReview: (id: string) => `${apiUrl}reviews/${id}`,
};
