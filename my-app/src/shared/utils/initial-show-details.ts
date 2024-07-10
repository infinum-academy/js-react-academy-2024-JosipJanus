import { IShow } from '@/types/show.type';

export function initialShowDetails(): IShow {
    return {
        id: '1',
        title: 'One song a day takes mischief away',
        description: `The story is seen through the eyes of 6 year old Perica Safranek. On a family picnic Perica's
    mother starts flirting with Mr Fulir, a Zagreb Dandy. The father at first doesn't notice it, but wants
    to marry off the aunt. After a couple of invitations to their Zagreb home, the father becomes aware
    of Fulir's passes at his wife...`,
        image_url:
            'https://m.media-amazon.com/images/M/MV5BYTY1MzA0Y2ItOWUwMy00ZDA1LWI1NGQtMDlhYjBkYzRiNTVmXkEyXkFqcGdeQXVyMjI2NDIxNjI@._V1_FMjpg_UY644_.jpg',
        average_rating: undefined,
    };
}
