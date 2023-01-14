import axios from "axios";

export default function UpVote(props) {
    const upVoteButton = async () => {
        const request = await axios.put(
            `/api/articles/${props.articleId}/upvote`
        );
        const response = request.data;

        // This function was declared on father's page and passed through props.
        props.updateArticle(response);
    };

    return <button onClick={upVoteButton}>Upvote</button>;
}
