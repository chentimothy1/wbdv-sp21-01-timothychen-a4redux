import React from 'react'
import CourseRow from './course-row';
import { Link } from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container round-corners">
                    <table className="table table-hover table-borderless responsive">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="fa-lg">Title</th>
                                <th scope="col" className="fa-lg d-none d-sm-table-cell">Owned By</th>
                                <th scope="col" className="fa-lg d-none d-lg-table-cell">Last Modified</th>
                                <th scope="col">
                                    <i className=" mx-2 fa fa-lg fa-folder"></i>
                                    <i className="mx-2 fas fa-lg fa-sort"></i>
                                    <Link to="/courses/grid">
                                        <i className="fas fa-lg fa-th"></i>
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.courses.map((course, idx) =>
                                    <CourseRow
                                        deleteCourse={this.props.deleteCourse}
                                        updateCourse={this.props.updateCourse}
                                        key={course._id}
                                        course={course}
                                        title={course.title}
                                        owner={course.owner}
                                        lastModified={course.lastModified}
                                    />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}