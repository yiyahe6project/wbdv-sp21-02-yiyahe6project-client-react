import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({addCourse, updateCourse, deleteCourse, courses}) =>
    <div>
        <div className="row mb-4">
            <div className="col-5 h3 d-none d-md-block">Recent Documents</div>
            <div className="col-5 h3 d-none d-md-block dropdown-toggle">Owned by me</div>
            <div className="col-md-2  text-right">
                <i className="fas fa-folder fa-2x pr-3"></i>
                <i className="fas fa-sort-alpha-up fa-2x pr-3 "></i>
                <Link to="/courses/table">
                    <i className="fas fa-list fa-2x"></i>
                </Link>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
        {
          courses.map((course, ndx) =>
            <CourseCard
                course={course}
                updateCourse={updateCourse}
                deleteCourse={deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
            />
          )
        }
        </div>
          <button className="footer-plus-icon float-right" onClick={addCourse}>
              <i className="fas fa-plus-circle fa-3x"></i>
          </button>
</div>
export default CourseGrid
