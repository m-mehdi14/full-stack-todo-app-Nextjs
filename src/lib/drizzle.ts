import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferModel } from "drizzle-orm";
  import { sql } from "@vercel/postgres";



export const todoTable = pgTable("todo",{
    id : serial("id").primaryKey(),
    title : text("title").notNull(),
    description : text("description").notNull(),
})

export type todo = InferModel<typeof todoTable>
export type NewTodo = InferModel<typeof todoTable, "insert"> // insert

export const db = drizzle(sql);