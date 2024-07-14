export async function mutator(url: string, { arg }: { arg: any }) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Error mutating data on ${url}`);
    }

    localStorage.setItem('client', response.headers.get('Client') ?? '');
    localStorage.setItem(
        'access_token',
        response.headers.get('Access-Token') ?? ''
    );
    localStorage.setItem('uid', response.headers.get('Uid') ?? '');

    return await response.json();
}
