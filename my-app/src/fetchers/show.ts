import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '@/types/show.type';

interface IShowsResponse {
    shows: Array<IShow>;
}

export function getShows() {
    return fetcher<IShowsResponse>('/api/shows');
}

export function getTopRatedShows() {
    return fetcher<IShowsResponse>('/api/top-rated');
}

export function getShow(id: string) {
    return fetcher<IShow>(`/api/shows/${id}`);
}
