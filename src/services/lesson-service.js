const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/timca4/modules"
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/timca4/lessons"

// const MODULES_URL = "http://localhost:8080/api/timca4/modules"
// const LESSON_URL = "http://localhost:8080/api/timca4/lessons"


export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'DELETE'
    }).then(response => response.json());

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export default { findLessonsForModule, createLessonForModule, updateLesson, deleteLesson }