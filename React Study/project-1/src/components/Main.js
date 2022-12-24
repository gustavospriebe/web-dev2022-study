export default function Main() {
    return (
        <div className="main">
            <div className="title">
                <p className="name">Gustavo Priebe</p>
                <p className="job-title">Fullstack Developer</p>
                <p className="website">github.com/gustavospriebe</p>
            </div>
            <div className="buttons">
                <button type="button" className="email">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    Email
                </button>
                <button type="button" className="linkedin">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        LinkedIn
                </button>
            </div>
            <div className="content">
                <div className="about">
                    <h4>About</h4>
                    <p>
                        I am a frontend developer with a particular interest in
                        making things simple and automating daily tasks. I try
                        to keep up with security and best practices, and am
                        always looking for new things to learn.
                    </p>
                </div>
                <div className="interest">
                    <h4>Interests</h4>
                    <p>
                        Food expert. Music scholar. Reader. Internet fanatic.
                        Bacon buff. Entrepeneur. Travel geek. Pop culture ninja.
                        Coffee fanatic.
                    </p>
                </div>
            </div>
        </div>
    );
}
