import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "./course-table.css"
import Table from 'react-bootstrap/Table';

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>


        <Table className="table">
            <thead>
            <tr>
                <th className="h3" colSpan="2">Title</th>
                <th className="h3 d-none d-sm-table-cell">Owned by</th>
                <th className="h3 d-none d-md-table-cell">Last Modified</th>
                <th className="header-icons">
                    <i className="fas fa-folder fa-2x pr-3"></i>
                    <i className="fas fa-sort-alpha-up fa-2x pr-3"></i>
                    <Link to="/courses/grid">
                        <i className="fas fa-2x fa-th "></i>
                    </Link>

                </th>
            </tr>
            </thead>
          <tbody>
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </Table>
          <button className="footer-plus-icon float-right" onClick={this.props.addCourse}>
              <i className="fas fa-plus-circle fa-3x"></i>
          </button>

      </div>
    )
  }
}
