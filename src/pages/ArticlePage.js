import { useParams } from "react-router-dom";
import articles from "./Article-content";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import AddcommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";


const ArticlePage=()=>{

    const [articleInfo, setArticleInfo]=useState({
        upvotes:0, comments:[]});
    
    const {articleId}=useParams();
    const {user, isLoading} =useUser();

    //this useEffect hook runs every time when component updates
    useEffect(()=>{
        const loadArticleInfo=async ()=>{
            const response= await axios.get(`/api/articles/${articleId}`)
            const newArticleInfo=response.data;
            setArticleInfo(newArticleInfo)
        }
        loadArticleInfo();
    },[]);

    const article = articles.find(x=>x.name===articleId);

    //function for upvoting
    const addUpvote= async()=>{
        
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if(!article){
        return <NotFoundPage/>
    }



    return(
        <>
        <h1>{article.title}</h1>
        <div className="upvote-section">
            {user ?
            <button onClick={addUpvote}>Upvote</button>
            : <button>LogIn to upvote</button>}
            <p>this article has {articleInfo.upvotes} upvotes.</p>
        </div>
        {article.content.map((paragraph,i)=>(
            <p key={i}>{paragraph}</p>
        ))}

        {user ? 
        <AddcommentForm
        articleName={articleId}
        onArticleUpdated={updatedArticle=>setArticleInfo(updatedArticle)}/>
        :<button>Login to comment</button>}
        <CommentsList comments={articleInfo.comments}/>
        </>
    );
}

export default ArticlePage;