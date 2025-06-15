import { useState, useEffect } from "react";
import logo from '../assets/logo.png'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-11"}`}
        >
            <div className="flex items-center justify-between px-96 text-sm">
                <div>
                    <img src={logo} alt="logo" className={`w-28 ${scrolled ? "" : "invert"}`} />
                </div>
                <nav className={`flex items-center gap-6 ${scrolled ? "text-black" : "text-white"}`}>
                    <a href="#home" className="hover:text-slate-700">HOME</a>
                    <a href="#features" className="hover:text-slate-700">FEATURES</a>
                    <a href="#about" className="hover:text-slate-700">ABOUT</a>
                    <a href="#testimonial" className="hover:text-slate-700">TESTIMONIAL</a>
                    <a href="#pricing" className="hover:text-slate-700">PRICING</a>
                    <button className={`inline-flex items-center justify-center rounded-3xl border-[2px] px-6 py-2 ${scrolled ? "text-black border-black hover:bg-black hover:text-white" : "text-white border-white hover:bg-slate-700 hover:border-slate-700"}`}>
                        TRY DEMO
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
