import { NextRequest, NextResponse } from "next/server";
  import { db, todoTable } from "@/lib/drizzle";
  import { eq } from "drizzle-orm";
  import { sql } from "@vercel/postgres";

export async function DELETE(request: NextRequest, { params }: { params: { id: any } }) {
  const { id } = params;

  // Delete the todo from the database
  const data = await sql`delete from  todo where id = ${id}`;

  return new NextResponse(
    JSON.stringify({
      message: "Todo has been deleted.",
      data,
    })
  );
}




export async function PATCH(request : NextRequest, { params }: { params: { id: any } }){
      const { id } = params;
      const req = await request.json();

      const {title , description } = req;

      if(!title || !description){
          return NextResponse.json({message : "Please provide the title and description!"})
      }

      //update the existing todo in database
      const data = await sql`update todo set title = ${title}, description = ${description} where id=${id}`;
        
      if (data.rowCount === 0) {
        return new NextResponse(
          JSON.stringify({
            message: "No todo found with the specified id.",
          })
        );
      } else {
        return new NextResponse(
          JSON.stringify({
            message: "Todo has been updated!",
            data,
          })
        );
      }

}