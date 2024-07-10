const showsJson = require('@/shows.json');

export async function GET() {
    return Response.json(showsJson);
}
