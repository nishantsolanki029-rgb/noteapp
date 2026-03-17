import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!title || !notes) return;

    const newTask = {
      id: Date.now(),
      title,
      notes
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setNotes("");
  };

  const deleteTask = (id) => {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">

      {/* Add Task Section */}
      <div className="lg:w-1/3 w-full flex items-center justify-center p-6 bg-black">

        <form
          onSubmit={submitForm}
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
        >
          <h1 className="text-2xl font-bold text-center">Add Task</h1>

          <input
            type="text"
            placeholder="Task Title"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows={5}
            placeholder="Write your notes..."
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 active:scale-95 transition"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Task List */}
      <div className="lg:w-2/3 w-full p-6 overflow-auto">

        <h1 className="text-3xl font-bold mb-6">Your Tasks</h1>

        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks added yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {tasks.map((task, index) => (
              <div
                key={task.id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h2 className="text-xl font-bold mb-2">
                  {index + 1}. {task.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {task.notes}
                </p>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
};

export default App;