const SERVER_URL = "http://localhost:8080/api/topics"

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
    .then( response => response.json());


const api = {
    createWidget, updateWidget, deleteWidget  
}

export default api