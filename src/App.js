import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import AttemptsList from "./components/quizzes/attempts-list";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path="/courses">
                <CourseManager/>
            </Route>
            <Route path="/courses/:courseId/quizzes" exact={true}>
                <QuizzesList/>
            </Route>
            <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                <Quiz/>
            </Route>
            <Route path="/courses/:courseId/quizzes/:quizId/attempts" exact={true}>
                <AttemptsList/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
