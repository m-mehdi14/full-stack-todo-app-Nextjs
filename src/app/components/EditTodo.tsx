"use client";
import React, { useEffect, useState } from 'react';

type todo = {
  title: string;
  description: string;
};

const EditTodo = () => {
  const [todo, setTodo] = useState<todo>({
    title: "",
    description: "",
  });

  const href = window.location.href;
  const todoId = href.split('/').pop();

  useEffect(() => {
    // Fetch the todo data when the component mounts
    const fetchTodo = async () => {
      try {
        const response = await fetch(`/api/todo/${todoId}`);
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodo();
  }, []);

  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onClickEdit = async () => {
    // Send a PATCH request to the API route to update the todo item
    const res = await fetch(`/api/todo/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    // Handle the response
    if (res.ok) {
      // Todo item was updated successfully
      // Redirect to the my todos page or display a success message
      location.reload();
    } else {
      // An error occurred
      // Display an error message
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
        <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Edit Todo</h2>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Title</label>
            <input   className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="title" placeholder='Title'  value={todo.title} onChange={onChange} />
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Description</label>
            <input   className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  name="description" placeholder='Description'  value={todo.description} onChange={onChange}/>
          </div>
          <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg w-fit" onClick={onClickEdit}>Edit Todo</button>
          <p className=" text-base text-gray-500 mt-3">To see your Updated Todo. Go To my todos page</p>
        </div>
      </div>
    </section>
  );
};

export default EditTodo;
