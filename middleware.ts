import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const session = await getSession();

    if (!session) {
        return NextResponse.redirect(new URL("/auth", request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profiles'],
}