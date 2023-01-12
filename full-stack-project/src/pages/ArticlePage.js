import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

export default function ArticlePage() {
    const initialState = {
        upvote: 0,
        comments: [],
    };
    const [values, setValues] = useState(initialState);
    const { articleId } = useParams();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const request = await axios.get(`/api/articles/${articleId}`);
            const response = request.data;
            setValues(response);
        };
        loadArticleInfo();
    }, [articleId]);

    const article = articles.find((article) => article.name === articleId);

    const upVoteButton = async () => {
        const request = await axios.put(`/api/articles/${articleId}/upvote`);
        const response = request.data;
        setValues(response);
    };

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                <button onClick={upVoteButton}>Upvote</button>
                <p>This article has {values.upvote} upvote(s).</p>
            </div>
            {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <CommentForm articleId={articleId} updateArticle={articleInfo => setValues(articleInfo)}/>
            {values.comments.length > 0 && <CommentsList comments={values.comments} />}
        </>
    );
}
