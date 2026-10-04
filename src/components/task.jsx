// Importing React so we can create our component.
import React from "react";

// Creating the reusable TaskCard component.
// task contains the task information.
// number contains the task's display number.
// onComplete is a function received from the parent component.
function TaskCard({ task, number, onComplete }) {

  // Returning the visual structure of one task.
  return (
    <article className="task-card">

      {/* Displaying the task number. */}
      <div className="task-number">
        {String(number).padStart(2, "0")}
      </div>

      {/* Container for the task information. */}
      <div className="task-content">

        {/* Displaying the task title. */}
        <h3>{task.title}</h3>

        {/* Displaying the task category. */}
        <span className="task-category">
          {task.category}
        </span>

      </div>

      {/* Button used to complete/remove the task. */}
      <button
        className="complete-button"
        onClick={() => onComplete(task.id)}
      >
        ✓ Complete
      </button>

    </article>
  );
}

// Exporting TaskCard so App.js can use it.
export default TaskCard;