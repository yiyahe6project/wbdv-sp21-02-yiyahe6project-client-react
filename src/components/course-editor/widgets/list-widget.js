import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        deleteWidget,
        updateWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)

    return(
        <div>
            {
                editing &&
                    <>
                        <i onClick={() => {
                            setEditing(false)
                            updateWidget(cachedItem)}}
                           className="fas fa-check float-right pr-2"></i>
                        <i onClick={() =>
                            deleteWidget(widget)}
                           className="fas fa-trash float-right pr-2"></i>
                        <br/>
                        <input
                            onClick={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    ordered: !cachedItem.ordered
                                })}
                            checked={cachedItem.ordered}
                            type="checkbox"/> Ordered
                        <br/>
                        Item list
                        <textarea
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    text: e.target.value
                                })}
                            value={cachedItem.text}
                            rows={10}
                            placeholder="Enter one list item per line"
                            className="form-control"></textarea>
                        {/*{JSON.stringify(widget)}*/}
                    </>
            }
            {
                !editing &&
                    <>
                        <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                        <h1>List Widget</h1>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget