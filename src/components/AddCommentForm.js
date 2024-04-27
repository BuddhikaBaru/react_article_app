import { useState } from "react";
import axios from "axios";

const AddcommentForm = ({articleName, onArticleUpdated})=>{
    const [name, setName] =useState('');
    const [commentText, setCommentText]=useState('');

    const addComment=async() =>{
        const response=await axios.post(`/api/articles/${articleName}/comments`,{
            postBy: name,
            text:commentText,
        });
        const updatedArticle=response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }




    return(
        <div id ="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text"
                value={name}
                onChange={e=>setName(e.target.value)}></input>
            </label>
            <label>
                comment:
                <textarea 
                value={commentText}
                onChange={e=>setCommentText(e.target.value)}
                rows="4" 
                cols="50"/>
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )

}

export default AddcommentForm;