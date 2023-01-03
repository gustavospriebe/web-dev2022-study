import location from "../images/location.png";

export default function Journal({data}) {
    return (
        <div className="main">
            <div className="journal">
                <img
                    alt="location"
                    src={data.img}
                ></img>
                <div className="journal--content">
                    <div className="journal--location">
                        <img alt="img" src={location}></img>
                        <p className="journal--country">{data.country}</p>
                        <a
                            href={`https://www.google.com.br/maps/place/${data.map}`}
                            className="journal--location--link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className="journal--place">{data.place}</h2>
                    <p className="journal--date">{data.initialDate} - {data.finalDate}</p>
                    <p className="journal--description">
                        {data.description}
                    </p>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
