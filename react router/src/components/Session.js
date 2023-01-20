import { useParams } from "react-router";
import { getSession } from "../api";

export default function Session() {
    const { sessionId, categoryId } = useParams();

    const { name, desc, speaker } = getSession({ sessionId, categoryId });

    return (
        <>
            <h3>{name}</h3>
            <p>{desc}</p>

            <h4>{speaker.name}</h4>
            <span>
                {speaker.title} at {speaker.org}
            </span>
            <p>{speaker.bio}</p>
        </>
    );
}
