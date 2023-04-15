import Image from "next/image";
import logo from "../public/images/logo.svg";

export default function Header() {
    return (
        <div className="fixed top-0 w-full mt-6 xl:mt-8 flex items-center justify-around">
            <Image src={logo} alt="logo" className=" w-28" />
            <div className="links">
                <ul className="flex flex-row gap-6 xl:gap-8">
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Carrers</a>
                    </li>
                    <li>
                        <a href="">Events</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
