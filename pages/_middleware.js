import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const address =
    process.env.NEXT_PUBLIC_WEB_ADDRESS || 'http://localhost:3000';
  if (pathname === '/') {
    return NextResponse.redirect(`${address}/lojas`);
  }
  return NextResponse.next();
}
