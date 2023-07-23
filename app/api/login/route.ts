import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('GET test');

  const response = await fetch('http://localhost:4000/', {
    method: 'GET',
    body: request.body,
    credentials: 'include',
  });

  return response;
}
