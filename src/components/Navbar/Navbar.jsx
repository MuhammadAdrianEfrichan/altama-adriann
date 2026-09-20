import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import bgSubMenu from "../../assets/navbar/BgSubMenu.svg";
import bgMenuBrand from "../../assets/navbar/BgMenuBrand.png";
import bgMenuCareer from "../../assets/navbar/BgMenuCareer.png";
import btnBrand from "../../assets/navbar/BtnBrand.svg";
import btnCareer from "../../assets/navbar/BtnCareer.svg";
import btnContactUs from "../../assets/navbar/BtnContactUs.svg";
import btnMedia from "../../assets/navbar/BtnMedia.svg";
import btnProfile from "../../assets/navbar/BtnProfile.svg";
import logo from "../../assets/navbar/Logo.svg";
import arrow from "../../assets/navbar/PanahSubMenu.svg";

const careerMenuItems = [
    { label: "Apply Job", path: "/grow-with" },
    { label: "Life at Altama", path: "/life-at" },
    { label: "Testimoni", path: "/life-at" },
];

const Navbar = () => {
    const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
    const [isCareerMenuOpen, setIsCareerMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            requestAnimationFrame(() => {
                document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
            return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname, hash]);

    return (
        <div className="">
        <header className="fixed inset-x-0 top-0 z-30 h-15 bg-white lg:h-auto lg:bg-transparent">
            <div
                className="pointer-events-none absolute left-79.5 top-0 hidden origin-top-left drop-shadow-[0_6px_6px_rgba(0,0,0,0.18)] lg:block"
            >
                <img
                    className="block h-auto w-full object-contain"
                    src={bgSubMenu}
                    alt=""
                />
            </div>

            <Link
                className="absolute left-3 top-2.5 z-10 w-[clamp(6.5rem,30vw,8rem)] focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4 lg:left-0 lg:top-0 lg:w-auto"
                to="/"
                aria-label="Altama Surya Anugerah home"
            >
                <img src={logo} alt="Altama Surya Anugerah" />
            </Link>

            <button
                type="button"
                className="absolute right-4 top-2 z-40 flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-primary lg:hidden"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => {
                    setIsMobileMenuOpen((isOpen) => !isOpen);
                    setIsBrandMenuOpen(false);
                    setIsCareerMenuOpen(false);
                }}
            >
                <span className={`h-0.5 w-5 bg-current transition-transform ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-current transition-transform ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            <nav
                className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute left-0 top-15 z-30 w-full flex-col border-t border-abu bg-white px-[clamp(0.75rem,4vw,1rem)] pb-4 pt-2 lg:relative lg:left-auto lg:top-auto lg:ml-[clamp(12rem,28vw,25rem)] lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-[clamp(1rem,3vw,3rem)] lg:border-0 lg:bg-transparent lg:p-0 lg:pb-6.5 lg:pt-6.5`}
                aria-label="Main navigation"
            >
                <Link
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-offset-4"
                    to="/#profile"
                    aria-label="Profile"
                >
                    <span className="font-header text-[clamp(1rem,4vw,1.125rem)] leading-[clamp(2.5rem,10vw,3rem)] text-primary lg:hidden">Profil</span>
                    <img className="hidden lg:block" src={btnProfile} alt="Profile" />
                </Link>
                <div className="relative flex-[0_0_auto]">
                    <div className="inline-flex items-center">
                        <Link
                            className="inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                            to="/#brand"
                            aria-label="Brand"
                            onClick={() => setIsBrandMenuOpen(false)}
                        >
                            <span className="font-header text-[clamp(1rem,4vw,1.125rem)] leading-[clamp(2.5rem,10vw,3rem)] text-primary lg:hidden">Brand</span>
                            <img className="hidden lg:block" src={btnBrand} alt="Brand" />
                        </Link>
                        <button
                            type="button"
                            className="ml-auto inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4 lg:ml-2"
                            aria-label="Open Brand menu"
                            aria-expanded={isBrandMenuOpen}
                            aria-controls="brand-menu"
                            onClick={() => {
                                setIsBrandMenuOpen((isOpen) => !isOpen);
                                setIsCareerMenuOpen(false);
                            }}
                        >
                                <img
                                className={`h-3 w-4 transition-transform ${isBrandMenuOpen ? "rotate-180" : ""}`}
                                src={arrow}
                                alt=""
                            />
                        </button>
                    </div>
                    {isBrandMenuOpen && (
                        <div
                            id="brand-menu"
                            className="absolute left-1/2 top-full z-30 mt-3 h-[min(11.625rem,55vw)] w-[min(7.625rem,calc(100vw-2rem))] -translate-x-1/2"
                            role="menu"
                        >
                            <img
                                className="absolute inset-0 h-full w-full"
                                src={bgMenuBrand}
                                alt=""
                                aria-hidden="true"
                            />
                            <div className="relative flex h-full flex-col justify-center gap-[clamp(0.75rem,4vw,1.25rem)] pl-[clamp(0.75rem,4vw,1.25rem)]">
                                {['Tekiro', 'Rexco', 'Ryu'].map((brand) => (
                                    <Link
                                        key={brand}
                                        className="font-header text-[clamp(1.125rem,6vw,1.5625rem)] leading-none text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-primary"
                                        to={`/#${brand.toLowerCase()}`}
                                        role="menuitem"
                                        onClick={() => setIsBrandMenuOpen(false)}
                                    >
                                        {brand}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <Link
                    className="inline-flex h-12 flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    to="/#media-center"
                    aria-label="Media Center"
                >
                    <span className="font-header text-[clamp(1rem,4vw,1.125rem)] leading-[clamp(2.5rem,10vw,3rem)] text-primary lg:hidden">Media Center</span>
                    <img className="hidden lg:block" src={btnMedia} alt="Media Center" />
                </Link>
                <div className="relative flex-[0_0_auto]">
                    <div className="inline-flex items-center">
                        <Link
                            className="inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                            to="/#career"
                            aria-label="Career"
                            onClick={() => setIsCareerMenuOpen(false)}
                        >
                            <span className="font-header text-[clamp(1rem,4vw,1.125rem)] leading-[clamp(2.5rem,10vw,3rem)] text-primary lg:hidden">Karir</span>
                            <img className="hidden lg:block" src={btnCareer} alt="Career" />
                        </Link>
                        <button
                            type="button"
                            className="ml-auto inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4 lg:ml-2"
                            aria-label="Open Career menu"
                            aria-expanded={isCareerMenuOpen}
                            aria-controls="career-menu"
                            onClick={() => {
                                setIsCareerMenuOpen((isOpen) => !isOpen);
                                setIsBrandMenuOpen(false);
                            }}
                        >
                            <img
                                className={`h-3 w-4 transition-transform ${isCareerMenuOpen ? "rotate-180" : ""}`}
                                src={arrow}
                                alt=""
                            />
                        </button>
                    </div>
                    {isCareerMenuOpen && (
                        <div
                            id="career-menu"
                            className="absolute left-1/2 top-full z-30 mt-3 h-[min(11.625rem,55vw)] w-[min(11.25rem,calc(100vw-2rem))] -translate-x-1/2"
                            role="menu"
                        >
                            <img
                                className="absolute inset-0 h-full w-full"
                                src={bgMenuCareer}
                                alt=""
                                aria-hidden="true"
                            />
                            <div className="relative flex h-full flex-col justify-center gap-[clamp(0.75rem,4vw,1.25rem)] pl-[clamp(0.75rem,4vw,1.25rem)]">
                                {careerMenuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        className="font-header text-[clamp(1.125rem,6vw,1.5625rem)] leading-none text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-primary"
                                        to={item.path}
                                        role="menuitem"
                                        onClick={() => setIsCareerMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <Link
                    className="inline-flex h-12 flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    to="/#contact-us"
                    aria-label="Contact Us"
                >
                    <span className="font-header text-[clamp(1rem,4vw,1.125rem)] leading-[clamp(2.5rem,10vw,3rem)] text-primary lg:hidden">Hubungi Kami</span>
                    <img className="hidden lg:block" src={btnContactUs} alt="Contact Us" />
                </Link>
            </nav>
        </header>
        </div>
    );
};

export default Navbar;