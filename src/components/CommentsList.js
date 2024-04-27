const commentsList=({comments})=>(
    <>
    <h3>comments:</h3>
    {
        comments.map(comment=>(
            <div className="comment" key={comment.postBy+": "+comment.text}>
                <h4>{comment.postBy}</h4>
                <p>{comment.text}</p>
            </div>
        ))
    }
    </>
);

export default commentsList;