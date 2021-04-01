import React from 'react'

const ListWidget = (
    {
        widget,
        editing = false,
        editingWidget,
        setEditingWidget,
    }) => {

    return (
        <>
            {
                editing &&
                <div style={{ "width": "85%" }}>
                    <select
                        //widget type selector
                        //add more widgets here later
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, type: e.target.value })}
                        value={editingWidget.type}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>

                    {/* editing type */}
                    <input
                        type="checkbox"
                        checked={editingWidget.ordered}
                        onChange={(e) => setEditingWidget({ ...editingWidget, ordered: !editingWidget.ordered })}
                        className="ml-2"
                    />
                    <span className="m-2">Ordered</span>

                    {/* text area */}
                    <h6 className="m-2">List Items:</h6>
                    <textarea
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, text: e.target.value })}
                        value={editingWidget.text}
                        rows="8">
                    </textarea>

                </div>
            }

            {
                !editing &&
                <div>
                    {widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {!widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            }
        </>
    );
};

export default ListWidget
