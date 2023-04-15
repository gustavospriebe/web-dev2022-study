import Image from "next/image";
import Header from "./Header";

import hero from "../public/images/desktop/image-hero.jpg";

export default function Hero() {
    return (
        <div className="hero">
            <Header />
            <Image src={hero} alt="hero" />
            <div className="fixed top-24 md:top-36 lg:top-48 w-full flex justify-around">
                <h2 className="hero-text border md:w-1/3 lg:w-2/5 w-2/4 p-5 border-white border-3">
                    IMMERSIVE EXPERIENCIES THAT DELIVER
                </h2>
                <div className="text-transparent">oi</div>
            </div>
        </div>
    );
}
