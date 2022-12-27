import star from "../images/star.png";

export default function Card({ item }) {
    let badgeText;
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            <img
                src={require(`../images/${item.coverImg}.png`)}
                alt="card"
                className="card--photo"
            ></img>
            {badgeText && <div className="card--badge">{badgeText}</div>}{" "}
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"></img>
                <p className="card--rank">{item.stats.rating}</p>
                <p className="card--review--count gray">
                    ({item.stats.reviewCount}) •
                </p>
                <p className="card--country gray">{item.location}</p>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price">
                <span className="bold">From ${item.price}</span> / person
            </p>
        </div>
    );
}
