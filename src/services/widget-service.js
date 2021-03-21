// const SERVER_URL = "http://localhost:8080/api"

const SERVER_URL = "https://wbdv-sp21-timothychen-a1.herokuapp.com/api"

export const createWidget = (topicId, widget) =>
    fetch(`${SERVER_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json',
        },
    })
        .then(response => response.json());

export const updateWidget = (widget) =>
    fetch(`${SERVER_URL}/widgets/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${SERVER_URL}/widgets/${widgetId}`, {
        method: "DELETE",
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${SERVER_URL}/topics/${topicId}/widgets`)
        .then(response => response.json());

const api = {
    createWidget, updateWidget, deleteWidget, findWidgetsForTopic
}

export default api