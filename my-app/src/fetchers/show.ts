import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '@/types/show.type';
import { swrKeys } from './swrKeys';

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
