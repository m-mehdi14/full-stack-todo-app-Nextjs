import { NextRequest , NextResponse } from "next/server";
import { db , todoTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";


export async function POST(request : NextRequest){
    const body = await request.json();
    const data  = await  db.insert(todoTable).values(body).returning();

    return new NextResponse(
        JSON.stringify({
            message : "Data Added",
            data,
        })
    );
}

export async function GET(request : NextRequest){
    const data = await db.select().from(todoTable);

    return new NextResponse(JSON.stringify(data))

}

