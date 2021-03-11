import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import CourseCard from "./course-card";
import CourseRow from "../course-table/course-row";

const CourseGrid = ({ courses, updateCourse, deleteCourse }) => {
    return (<div>
        <br></br>
        <div className="container">
            <div className="row mb-2">
                <div className="col align-middle fa-lg">
                    <Link to="/courses/table">
                        <i className="fas fa-list fa-sm float-right px-3"></i>
                    </Link>
                    <a href="#">
                        <i className="fas fa-sort float-right px-3"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-folder float-right px-3"></i>
                    </a>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {
                    courses.map((course, idx) =>
                        <CourseCard
                            key={course._id}
                            course={course}
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified} />
                    )
                }
            </div>
        </div>

    </div>)
}

export default CourseGrid