"use client";
import { useState } from "react";
import { db , todoTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";
type todo = {
  title: string;
  description: string;
};
const Todo = () => {

    const [todo, setTodo] = useState<todo>({
        title: "",
        description: "",
      });
    
      const onChange = (e: any) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
      };
    
      const onClickAdd = async () => {
         
        const response = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify(todo),
        });
        // Display a message when user click on add todo button.
        // window.alert('Todo has been Added! ');
        location.reload();
      };
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Todo App</h2>
                    <div className="relative mb-4">
                        <label  className="leading-7 text-sm text-gray-600">Title</label>
                        <input   className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="title" placeholder='Title'  value={todo.title} onChange={onChange} />
                    </div>
                    <div className="relative mb-4">
                        <label  className="leading-7 text-sm text-gray-600">Description</label>
                        <input   className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  name="description" placeholder='Description'  value={todo.description} onChange={onChange}/>
                    </div>
                    <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg w-fit" onClick={onClickAdd}>Add Todo</button>
                    <p className=" text-base text-gray-500 mt-3">To see your Todos List. Go To my todos page</p>
                </div>
            </div>
        </section>
    )
}

export default Todo