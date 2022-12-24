import photo from "../images/photo.png";

export default function Main() {
    return (
        <div className="main">
            <img src={photo} alt="airbnb"></img>
            <h1>Online Experiences</h1>
            <p>
                Join unique interctive activities led by one-of-a-kind
                hosts--all without leaving home.
            </p>
        </div>
    );
}
