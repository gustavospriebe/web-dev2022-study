import { useState } from "react";
import axios from "axios";

export default function CommentForm(props) {
    const initialState = {
        name: "",
        comment: "",
    };

    const [values, setValues] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const req = await axios.post(
            `/api/articles/${props.articleId}/comments`,
            {
                postedBy: values.name,
                text: values.comment,
            }
        );

        const res = req.data;

        props.updateArticle(res);

        setValues(initialState);
    };

    return (
        <>
            <form onSubmit={handleSubmit} id="add-comment-form">
                <h3>Add a Comment</h3>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Comment:
                    <textarea
                        rows="4"
                        cols="50"
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                    />
                </label>
                <button>Add Comment</button>
            </form>
        </>
    );
}
