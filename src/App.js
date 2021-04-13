import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home";
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quizzes from "./components/quizzes/quizzes";
import Quiz from "./components/quizzes/quiz";

function App() {

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}  component={Home}/>
                <Route path="/courses" component={CourseManager}/>
                {/*<Route path="/courses/editor" component={CourseEditor}/>*/}

                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}/>
    
                <Route path="/courses/:courseId/quizzes" component={Quizzes} exact={true}/>
                <Route path="/courses/:courseId/quizzes/:quizId" component={Quiz} exact={true}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
