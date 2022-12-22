import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter} alt='twitter'></img>
            <img src={facebook} alt='facebook'></img>
            <img src={instagram} alt='instagram'></img>
            <img src={github} alt='github'></img>
        </div>
    );
}
