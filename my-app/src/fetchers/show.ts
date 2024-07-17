import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '@/types/show.type';
import { swrKeys } from './swrKeys';
import { Review } from '@/types/review.type';

interface IShowsResponse {
    shows: Array<IShow>;
}

export function getShows() {
    return fetcher<IShowsResponse>(`${swrKeys.allShows}`);
}

export function getTopRatedShows() {
    return fetcher<IShowsResponse>(swrKeys.topRated);
}

export function getShow(id: string) {
    return fetcher<IShow>(`${swrKeys.showDetail}/${id}`);
}

export function getShowReviews(show_id: string) {
    return fetcher<Array<Review>>(`${swrKeys.showReviews(show_id)}`);
}
