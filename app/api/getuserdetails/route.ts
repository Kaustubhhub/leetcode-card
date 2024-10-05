import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const username = body.username;
    console.log(username)
    const details = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`)
    const k = await details.data;
    console.log(" kaustubh :",k)
    return NextResponse.json({ data: k })
}