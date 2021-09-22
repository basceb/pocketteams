import React from "react";
import Taskcard from "./Taskcard";
import PopMenu from "./PopMenu";

const SectionCard = ({ taskList }) => {
  return (
    <div className="d-flex flex-column" style={{ width: "300px" }}>
      <div className="section-wrapper">
          <p className="sectionTitle py-2">Sectionname</p>
          <div className="section-wrapper-internal">
              {/* <button class="btn-add-task" type="button">
                <p><i class="bi bi-plus-square"></i> Add Another Task</p>
              </button> */}
              <p className="taskTitle">Task</p>
              <hr className="notes"/>
              <p className="taskTitle">Task</p>
              <hr className="notes"/>
              <p className="taskTitle">Task</p>
              <hr className="notes"/>
              <div className="btn-container">
              <button className="theme-btn add-task-btn">ADD ANOTHER TASK</button>
              </div>
          </div>
        </div>
    </div>
  );
};

export default SectionCard;
