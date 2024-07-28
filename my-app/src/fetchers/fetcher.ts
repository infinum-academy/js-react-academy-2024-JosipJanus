export async function fetcher<T>(
    input: string | URL | globalThis.Request,
    init?: RequestInit
): Promise<T> {
    let data;
    try {
        const response = await fetch(input, {
            ...init,
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.getItem('access_token') ?? '',
                Uid: localStorage.getItem('uid') ?? '',
                Client: localStorage.getItem('client') ?? '',
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        if (response.status !== 204) {
            data = response.json();
        }

        // return response.json();
    } catch (error) {
        throw new Error(`Response status: ${error}`);
    }

    return data;
}
