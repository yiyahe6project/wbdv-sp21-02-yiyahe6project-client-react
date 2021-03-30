import React, {useState} from 'react'

const ImageWidget = (
    {
         widget,
         deleteWidget,
         updateWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)

    return (
        <div>
            {
                editing &&
                <>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(cachedItem)
                    }}
                       className="fas fa-check float-right pr-2"></i>
                    <i onClick={() =>
                        deleteWidget(widget)}
                       className="fas fa-trash float-right pr-2"></i>
                    <br/>
                    <p>Image URL</p>
                    <input
                        value={cachedItem.src}
                        onChange={(e) => {
                            setCachedItem({
                                ...cachedItem,
                                src: e.target.value
                            })
                        }}
                        className="form-control"
                        placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyYJFQPzXUrUhS2GcdSZQgkcNIqvD_2uXLA&usqp=CAU"/>
                    <p>Image width</p>
                    <input value={cachedItem.width}
                           onChange={(e) => {
                               setCachedItem({
                                   ...cachedItem,
                                   width: e.target.value
                               })
                           }}
                           type="number"
                           placeholder="250"
                           className="form-control"/>
                    <p>Image height</p>
                    <input value={cachedItem.height}
                           onChange={(e) => {
                               setCachedItem({
                                   ...cachedItem,
                                   height: e.target.value
                               })
                           }}
                           type="number"
                           placeholder="200"
                           className="form-control"/>
                </>
            }

            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                    <h1>Image Widget</h1>
                    <img width={cachedItem.width} height={cachedItem.height} src={cachedItem.src}/>
                </>
            }
            {/*{JSON.stringify(widget)}*/}

        </div>
    )
}

export default ImageWidget