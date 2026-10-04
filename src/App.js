// Importing React so that we can create our React component.
import React from "react";

// Importing useState to store and update data.
// Importing useEffect to perform an action whenever the task list changes.
import { useEffect, useState } from "react";

// Importing our reusable TaskCard component.
import TaskCard from "./components/task";

// Importing the CSS file used to style the application.
import "./App.css";


// Creating the main App component.
function App() {

  // Creating the tasks state.
  // tasks contains the current list of tasks.
  // setTasks is used whenever we want to update that list.
  const [tasks, setTasks] = useState([

    // First task in the initial task list.
    {
      // Unique ID of the first task.
      id: 1,

      // Title of the first task.
      title: "Finish React Assignment",

      // Category of the first task.
      category: "Development",
    },

    // Second task in the initial task list.
    {
      // Unique ID of the second task.
      id: 2,

      // Title of the second task.
      title: "Review FYP Documentation",

      // Category of the second task.
      category: "Project",
    },

    // Third task in the initial task list.
    {
      // Unique ID of the third task.
      id: 3,

      // Title of the third task.
      title: "Prepare Database Lab",

      // Category of the third task.
      category: "Academics",
    },

  ]);


  // Creating state for the text entered by the user.
  // taskTitle stores whatever the user types into the input field.
  // setTaskTitle changes the value of taskTitle.
  const [taskTitle, setTaskTitle] = useState("");


  // Creating state for the category selected by the user.
  // The default category is Academics.
  const [taskCategory, setTaskCategory] = useState("Academics");


  // useEffect runs after the component renders.
  // The [tasks] dependency means this effect runs whenever tasks changes.
  useEffect(() => {

    // Printing the required message in the browser console.
    console.log("Task list updated!");

    // Printing the current total number of tasks.
    console.log("Total number of tasks:", tasks.length);

  // The effect watches the tasks state.
  }, [tasks]);


  // Function responsible for adding a new task.
  const addTask = (event) => {

    // Preventing the browser from refreshing the page
    // when the form is submitted.
    event.preventDefault();


    // Checking whether the input contains only spaces or is empty.
    if (taskTitle.trim() === "") {

      // Stop the function if there is no valid task title.
      return;
    }


    // Creating an object representing the new task.
    const newTask = {

      // Date.now() generates a number based on the current time.
      // This gives the new task a unique ID.
      id: Date.now(),

      // trim() removes unnecessary spaces from the beginning
      // and end of the task title.
      title: taskTitle.trim(),

      // Saving the selected category.
      category: taskCategory,
    };


    // Adding the new task to the existing task list.
    // currentTasks represents the latest version of the tasks array.
    setTasks((currentTasks) => [

      // Keeping all existing tasks.
      ...currentTasks,

      // Adding the newly created task.
      newTask,

    ]);


    // Clearing the input field after the task is added.
    setTaskTitle("");


    // Resetting the category back to Academics.
    setTaskCategory("Academics");
  };

// Function used to complete a task.
const completeTask = (taskId) => {

  // Creating a new array containing every task
  // except the task that was completed.
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== taskId)
  );
};

  // Returning the complete user interface of the application.
  return (

    // Main container of the CampusFlow application.
    <main className="campus-flow">


      {/* ================= HERO SECTION ================= */}

      {/* Header section containing the application title and counter. */}
      <section className="hero">

        {/* Container for the title and description. */}
        <div>

          {/* Small label above the main heading. */}
          <p className="eyebrow">
            STUDENT WORKSPACE / 01
          </p>


          {/* Main application title. */}
          <h1>
            Campus

            {/* Highlighting "Flow" separately for styling. */}
            <span>Flow</span>

          </h1>


          {/* Short description of the application. */}
          <p className="intro">
            Your academic command center for keeping track
            of the things that actually need to get done.
          </p>

        </div>


        {/* Task counter section. */}
        <div className="task-counter">

          {/* Displaying the current number of tasks. */}
          <strong>{tasks.length}</strong>

          {/* Label explaining what the number represents. */}
          <span>ACTIVE TASKS</span>

        </div>

      </section>



      {/* ================= ADD TASK SECTION ================= */}

      {/* Section containing the new-task form. */}
      <section className="composer">


        {/* Heading area for the task creation form. */}
        <div className="composer-heading">

          {/* Plus symbol used as a visual icon. */}
          <span>+</span>


          {/* Text explaining the purpose of this section. */}
          <div>

            {/* Section heading. */}
            <h2>Create a mission</h2>

            {/* Section description. */}
            <p>Add something you need to accomplish.</p>

          </div>

        </div>


        {/* Form used to add a new task. */}
        {/* onSubmit calls addTask when the form is submitted. */}
        <form onSubmit={addTask} className="task-form">


          {/* Input field where the user enters the task title. */}
          <input

            // Defining the type of input.
            type="text"

            // Showing helpful text before the user types.
            placeholder="What needs to be done?"

            // Connecting the input to taskTitle state.
            value={taskTitle}

            // Updating taskTitle whenever the user types.
            onChange={(event) => setTaskTitle(event.target.value)}

          />


          {/* Dropdown allowing the user to select a category. */}
          <select

            // Connecting the dropdown to taskCategory state.
            value={taskCategory}

            // Updating taskCategory whenever the selection changes.
            onChange={(event) => setTaskCategory(event.target.value)}

          >

            {/* First category option. */}
            <option value="Academics">
              Academics
            </option>

            {/* Second category option. */}
            <option value="Development">
              Development
            </option>

            {/* Third category option. */}
            <option value="Project">
              Project
            </option>

            {/* Fourth category option. */}
            <option value="Personal">
              Personal
            </option>

          </select>


          {/* Button used to submit the form and create the task. */}
          <button type="submit">
            Add Mission
          </button>


        </form>

      </section>



      {/* ================= TASK BOARD ================= */}

      {/* Header for the task list. */}
      <section className="board-header">

        {/* Contains the heading and small label. */}
        <div>

          {/* Small section label. */}
          <p className="eyebrow">
            CURRENT QUEUE
          </p>

          {/* Main task-list heading. */}
          <h2>
            Today's Missions
          </h2>

        </div>


        {/* Showing that the task list is currently active. */}
        <span className="live-indicator">

          {/* Small green status indicator. */}
          <i></i>

          {/* Status text. */}
          LIVE

        </span>

      </section>



      {/* Container for all task cards. */}
      <section className="task-list">


        {/* map() goes through every task in the tasks array. */}
        {tasks.map((task, index) => (

          // Rendering one reusable TaskCard for every task.
          <TaskCard

            // React requires a unique key for every item in a mapped list.
            key={task.id}

            // Passing the current task object to TaskCard through props.
            task={task}

            // Passing the task's position to TaskCard.
            number={index + 1}

            onComplete={completeTask}
          />

        ))}


      </section>



      {/* ================= FOOTER ================= */}

      {/* Footer displayed at the bottom of the application. */}
      <footer>

        {/* Footer text. */}
        CampusFlow • React Fundamentals • Assignment 01

      </footer>


    </main>
  );
}


// Exporting App so index.js can render it.
export default App;