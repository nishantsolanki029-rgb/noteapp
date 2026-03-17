import React from 'react'
import { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);

  function submitForm(){
    console.log("Task Added", {"Heading":Title, "List":Notes,});
    
    let newTask = [...Tasks];
    newTask.push( {"Heading":Title, "List":Notes,});
    setTasks(newTask);

    console.log(Tasks);

    setTitle("");
    setNotes("");
  }

  return (
    <>
      <section className='lg:flex items-center justify-center'>
          {/* form for add new task */}
          <div className='lg:w-1/2 w-full h-screen flex items-center justify-center'>
             <div className='bg-black/70 max-w-sm  w-full p-4 rounded-2xl '>
                <form className='bg-black text-white w-full rounded-3xl p-6 shadow-2xl' onSubmit={(e) => {
                  e.preventDefault();
                  submitForm();
                 
                }}>

                <h1 className='font-bold'>Add Your Task</h1>

                <input type="text" placeholder="Heading" className='w-full px-4 py-2 bg-[#222] rounded-md- my-2 text-white font-semibold outline-none focus:ring-2 focus:ring-white' value={Title} onChange={(e) => {
                  setTitle(e.target.value);
                }}/>

                <textarea row = {8} placeholder='Notes..' className='w-full px-4 py-2 bg-[#222] rounded-md- my-2 text-white outline-none focus:ring-2 focus:ring-white' onChange={(e) => {
                  setNotes(e.target.value);
                }}></textarea>

                <input type="submit" value="Add Task" className='bg-white text-black rounded-md font-semibold px-4 my-2 active:scale-95 active:bg-white/50 active:text-white w-full ' />
              </form>
             </div>
          
          </div>


          {/* div for show all task */}
          <div className='lg:w-1/2 w-full h-screen lg:border-l-2 max-lg:border-t-2 border-dashed bg-gray-200 flex flex-wrap items-center justify-center p-6 gap-6 overflow-auto'>
                
          {Tasks.map((task, id) => {
            return (
              <div className='w-full max-w-78 h-78 bg-white rounded-4xl shadow-2xl w flex items-end justify-center p-3 relative' key={id}>
                  <img src="./image.png" alt="" className='w-15 h-15 absolute z-10 top-0 '/>
                  <div className='w-full h-58 bg-orange-200 rounded-4xl p-4'>
                    <h1 className='text-xl font-semibold text-center my-1'>{id + 1}</h1>
                    <h1 className='text-4xl font-semibold text-center my-1'>{task.Heading}</h1>
                    <p className='text-gray-400 font-medium text-xl'>{task.List}</p>
                  </div>
                </div>
            );
          })}
          </div>
      </section>
    </>
  )
}

export default App