import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Comment from "../components/Comment";
import SubTask from "../components/SubTask";

const SideTask = ({ showed, hide }) => {
  const [markTask, setMarkTask] = useState(true);
  const [sectionName, setSectionName] = useState("section name");
  const [user, setUser] = useState("assign user");
  const [color, setColor] = useState(
    "form-select form-select-sm label-font ms-3"
  );

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <p
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </p>
  ));

  const reClass = () => {
    let val = document.getElementById("test").value;

    if (val == 1) {
      setColor("form-select form-select-sm label-font ms-3 light");
    } else if (val == 2) {
      setColor("form-select form-select-sm label-font ms-3 medium");
    } else if (val == 3) {
      setColor("form-select form-select-sm label-font ms-3 heavy");
    } else if (val === "select priority") {
      setColor("form-select form-select-sm label-font ms-3 prio");
    }
  };

  return (
    <div
      className={
        showed ? "sidenav active sidebar-wrapper" : "sidenav sidebar-wrapper"
      }
    >
      <div className="sidebar-box py-2 px-4">
        <div className="d-flex align-items-center justify-content-between">
          <button
            complete={markTask}
            onClick={() => setMarkTask(!markTask)}
            className="theme-btn theme-btn-md mb-2 py-1"
          >
            <i class="lni lni-checkmark-circle pe-2"></i>
            {markTask ? "Mark as complete" : "Completed"}
          </button>
          <div className="d-flex align-items-center">
            <i className="lni lni-trash-can pointer f-dark me-2"></i>
            <i
              onClick={() => hide(!showed)}
              className="lni lni-shift-right pointer f-dark me-2"
            ></i>
          </div>
        </div>

        <hr className="default mt-0" />

        <div className="scrolling-section scrolling-wrapper-y overflow-x-hidden">
          <div className="py-2">
            <form>
              <input
                className="py-2 full border-0 h3"
                type="text"
                placeholder="Write a task name"
              ></input>
              <>
                <div className="row mb-1 f-dark">
                  <div className="col-xl py-2 d-flex align-items-center">
                    <label className="label-font">Section:</label>
                    <div className="d-flex align-items-center mx-2">
                      <Dropdown>
                        <Dropdown.Toggle
                          as={CustomToggle}
                          id="dropdown-custom-components"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            fill="currentColor"
                            type="button"
                            className="bi btn-outline-secondary bi-plus-circle-dotted rounded-circle ms-3 me-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="label-font-fw"
                            onClick={(e) => setSectionName("Requested")}
                          >
                            Requested
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="label-font-fw"
                            onClick={(e) => setSectionName("To Do")}
                          >
                            To Do
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <p className="label-font">{sectionName}</p>
                    </div>
                  </div>

                  <div className="col-xl py-2 d-flex align-items-center">
                    <label className="label-font">Assigned: </label>
                    <div className="d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          as={CustomToggle}
                          id="dropdown-custom-components"
                        >
                          <i class="lni lni-user mx-2 line-icon p-2 sidetask-btn"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="label-font-fw"
                            onClick={(e) => setUser("User 1")}
                          >
                            User 1
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="label-font-fw"
                            onClick={(e) => setUser("User 2")}
                          >
                            User 2
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <p className="label-font">{user}</p>
                    </div>
                  </div>
                </div>
                <div className="row f-dark">
                  <div className="col-xl py-2 d-flex align-items-center">
                    <label className="label-font">Date:</label>
                    <div className="d-flex align-items-center">
                      <input
                        className="label-font border border-0 date-btn form-control p-0"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="col-xl py-2 d-flex align-items-center">
                    <label className="label-font me-2">Priority: </label>
                    <select
                      className={color}
                      aria-label="form-select-sm example"
                      id="test"
                      onChange={reClass}
                    >
                      <option
                        className="form-select-option label-font-fw prio"
                        aria-label="form-select-sm example"
                        default
                      >
                        select priority
                      </option>
                      <option className="light" value="1">
                        Light
                      </option>
                      <option className="medium" value="2">
                        Medium
                      </option>
                      <option className="heavy" value="3">
                        Heavy
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col py-2 h6 f-dark">
                    <label className="label-font">Description:</label>
                    <div className="px-2">
                      <textarea
                        placeholder="Describe Task."
                        className="mt-3 radius px-3 form-control py-2 label-font resize-0"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <SubTask />
                </div>
              </>
            </form>
          </div>
          <hr className="default my-1" />

          {/* -----COMMENT SECTION----- */}
          <div className="full">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
        <div className="mt-2 d-flex align-items-start">
          <i class="lni lni-user mx-2 line-icon"></i>
          <textarea
            className="mx-2 px-3 py-1 full form-control resize-0 radius label-font"
            placeholder="Write a comment"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end me-2">
          <button className="theme-btn theme-btn-sm py-1 my-1">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default SideTask;
