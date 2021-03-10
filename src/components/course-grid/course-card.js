import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse,
                      updateCourse,
                      course,
                      lastModified,
                      owner}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(course.title)

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  return (
      <div className="col-lg-2 col mb-4 col-sm-12 mb-3">
        <div className="card">
          <img src="https://picsum.photos/200"
               className="card-img-top"/>
          <div className="card-body">
            {
              !editing &&
              <Link to={`/courses/grid/edit/${course._id}`} className="card-title">{course.title}</Link>
            }

            {
              editing &&
              <input
                  onChange={(event) => setNewTitle(event.target.value)}
                  value={newTitle}
                  className="form-control mb-2"/>
            }

            <p className="card-text">Course description</p>

          </div>
          <div className="card-footer">
            <div className="float-right">
              {editing && <i onClick={() => saveTitle()} className="btn btn-primary fas fa-check mr-2"></i>}
              {editing && <i onClick={() => {setEditing(false); deleteCourse(course);}} className="btn btn-primary far fa-trash-alt"></i>}
              {!editing && <i onClick={() => setEditing(true)} className="btn btn-primary fas fa-edit"></i>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default CourseCard