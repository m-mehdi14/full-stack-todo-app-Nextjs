
import React from 'react'
import { db, todoTable } from '@/lib/drizzle'
import { sql } from '@vercel/postgres'
import DeleteTodo from '../components/DeleteTodo'



const page = async () => {

    return(
      <>
      <DeleteTodo/>
      </>
    )

}

export default page


