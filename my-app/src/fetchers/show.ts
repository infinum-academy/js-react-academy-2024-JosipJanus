import { fetcher } from '@/fetchers/fetcher';
import { IShow } from '@/types/show.type';

interface IShowsResponse {
    shows: Array<IShow>;
}

export function getShows() {
    return fetcher<IShowsResponse>('/api/all-shows');
}

export function getShow(id: string) {
    return fetcher<IShowsResponse>(`/api/all-shows/${id}`);
}
