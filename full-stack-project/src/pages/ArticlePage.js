import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            const response = await axios.get(
                `/api/articles/${articleId}`
            );
            const articleInfo = response.data;
            setValues(articleInfo);
        };
        loadArticleInfo();
    }, []);

    const article = articles.find((article) => article.name === articleId);

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            <h1>{article.title}</h1>
            <p>This article has {values.upvote} upvote(s).</p>
            {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </>
    );
}
