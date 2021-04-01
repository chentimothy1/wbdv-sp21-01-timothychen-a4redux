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

                    <input type="checkbox" /> Ordered
                    <br />
                    List Items
                    <textarea rows={10} value={widget.text} className="form-control">

                    </textarea>
                </div>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </>
    )
}

export default ListWidget