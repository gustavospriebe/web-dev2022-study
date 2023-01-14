import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import UpVote from "../components/UpVote";
import useUser from "../hooks/useUser";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

export default function ArticlePage() {
    const initialState = {
        upvote: 0,
        comments: [],
    };
    const [values, setValues] = useState(initialState);
    const { articleId } = useParams();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const request = await axios.get(`/api/articles/${articleId}`);
            const response = request.data;
            setValues(response);
        };
        loadArticleInfo();
    }, [articleId]);

    const navigate = useNavigate();
    const login = () => navigate("/login");

    const article = articles.find((article) => article.name === articleId);

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                {user ? (
                    <UpVote
                        articleId={articleId}
                        updateArticle={(articleInfo) => setValues(articleInfo)}
                    />
                ) : (
                    <button onClick={login}>Log in to Upvote</button>
                )}

                <p>This article has {values.upvote} upvote(s).</p>
            </div>
            {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            {user ? (
                <CommentForm
                    articleId={articleId}
                    updateArticle={(articleInfo) => setValues(articleInfo)}
                />
            ) : (
                <button onClick={login}>Log in to Add a Comment</button>
            )}
            {values.comments.length > 0 && (
                <CommentsList comments={values.comments} />
            )}
        </>
    );
}
