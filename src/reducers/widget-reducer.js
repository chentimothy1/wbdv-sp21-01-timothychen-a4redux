const initialState = {
    widgets: [
        { title: 'Test Topic 1', _id: '123', type: "1", text: "testing" },
        { title: 'Test Topic 2', _id: '987', type: "2", text: "testing text" },
        { title: 'Test Topic 3', _id: '456', type: "3", text: "this is texting text" },
    ]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {

        case "CREATE_WIDGET":
            const newStateCreated = {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget,
                ]
            }
            return newStateCreated;

        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(w => {
                    if (w.id === action.widgetToUpdate.id) {
                        return action.widgetToUpdate;
                    } else {
                        return w;
                    }
                })
            }

        case "DELETE_WIDGET":
            const newStateDeleted = {
                widgets: state.widgets.filter(w => {
                    if (w.id !== action.widgetToDelete.id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }
            return newStateDeleted;

        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets,
            }
        
        //below dont really do anything
        case "FIND_ALL_WIDGETS":
            return state;

        case "FIND_WIDGET":
            return state;

        default:
            return state;
    }
}

export default widgetReducer;