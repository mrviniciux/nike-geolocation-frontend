import { NextResponse } from 'next/server';

export async function middleware(req, _) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('http://localhost:3000/lojas')
    }
    return NextResponse.next()
}
