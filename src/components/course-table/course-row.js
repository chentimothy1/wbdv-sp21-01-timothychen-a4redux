import React, { useState } from 'react'
import { Link } from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control" />
                }
            </td>
            <td className="d-none d-sm-table-cell">
                {owner}
            </td>
            <td className="d-none d-lg-table-cell">
                {lastModified}
            </td>
            {/* TODO: update quiz location on course manager*/}
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td>
                {editing && <i onClick={() => deleteCourse(course)} className="btn btn-primary fas fa-trash mr-2"></i>}
                {!editing && <i onClick={() => { setEditing(true) }} className="btn btn-primary fas fa-edit mr-2"></i>}
                {editing && <i onClick={() => saveTitle()} className="btn btn-primary fas fa-check"></i>}
            </td>
        </tr>
    )
}
export default CourseRow