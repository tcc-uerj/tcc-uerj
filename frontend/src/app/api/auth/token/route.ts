import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const token = cookies().get('session-token')?.value;

    if (!token) {
        return new Response(JSON.stringify(null), { status: 200 })
    }

    return new Response(JSON.stringify(token) ?? null, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}