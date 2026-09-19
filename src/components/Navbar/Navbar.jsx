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
        <header className="fixed inset-x-0 top-0 z-30">
            {/*
              FIX: shadow dipindah ke wrapper (bukan langsung di <img>),
              dan object-fill diganti object-contain supaya proporsi SVG
              tidak diregangkan. object-fill sebelumnya mendistorsi bentuk
              gambar sehingga drop-shadow ikut mengikuti tepi yang salah
              dan muncul efek "patah" di sisi kanan area putih navbar.
            */}
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
                className="absolute left-3 top-2 z-10 w-28 focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4 lg:left-0 lg:top-0 lg:w-auto"
                to="/"
                aria-label="Altama Surya Anugerah home"
            >
                <img src={logo} alt="Altama Surya Anugerah" />
            </Link>

            <button
                type="button"
                className="absolute right-4 top-3 z-40 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg bg-primary text-white lg:hidden"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => {
                    setIsMobileMenuOpen((isOpen) => !isOpen);
                    setIsBrandMenuOpen(false);
                    setIsCareerMenuOpen(false);
                }}
            >
                <span className={`h-0.5 w-5 bg-white transition-transform ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-white transition-transform ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            <nav
                className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute right-4 top-18 z-30 w-[calc(100vw-2rem)] flex-col gap-3 rounded-2xl bg-white p-5 shadow-xl lg:relative lg:right-auto lg:top-auto lg:ml-100.75 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-20 lg:rounded-none lg:bg-transparent lg:p-0 lg:pb-6.5 lg:pt-6.5`}
                aria-label="Main navigation"
            >
                <Link
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-offset-4"
                    to="/#profile"
                    aria-label="Profile"
                >
                    <img className="block" src={btnProfile} alt="Profile" />
                </Link>
                <div className="relative flex-[0_0_auto]">
                    <div className="inline-flex items-center">
                        <Link
                            className="inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                            to="/#brand"
                            aria-label="Brand"
                            onClick={() => setIsBrandMenuOpen(false)}
                        >
                            <img className="block" src={btnBrand} alt="Brand" />
                        </Link>
                        <button
                            type="button"
                            className="ml-2 inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                            aria-label="Open Brand menu"
                            aria-expanded={isBrandMenuOpen}
                            aria-controls="brand-menu"
                            onClick={() => {
                                setIsBrandMenuOpen((isOpen) => !isOpen);
                                setIsCareerMenuOpen(false);
                            }}
                        >
                            <img
                                className={`transition-transform ${isBrandMenuOpen ? "rotate-180" : ""}`}
                                src={arrow}
                                alt=""
                            />
                        </button>
                    </div>
                    {isBrandMenuOpen && (
                        <div
                            id="brand-menu"
                            className="absolute left-1/2 top-full z-30 mt-3 h-46.5 w-30.5 -translate-x-1/2"
                            role="menu"
                        >
                            <img
                                className="absolute inset-0 h-full w-full"
                                src={bgMenuBrand}
                                alt=""
                                aria-hidden="true"
                            />
                            <div className="relative flex h-full flex-col justify-center gap-5 pl-5">
                                {['Tekiro', 'Rexco', 'Ryu'].map((brand) => (
                                    <Link
                                        key={brand}
                                        className="font-header text-[25px] leading-none text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-primary"
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
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    to="/#media-center"
                    aria-label="Media Center"
                >
                    <img className="block" src={btnMedia} alt="Media Center" />
                </Link>
                <div className="relative flex-[0_0_auto]">
                    <div className="inline-flex items-center">
                        <Link
                            className="inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                            to="/#career"
                            aria-label="Career"
                            onClick={() => setIsCareerMenuOpen(false)}
                        >
                            <img className="block" src={btnCareer} alt="Career" />
                        </Link>
                        <button
                            type="button"
                            className="ml-2 inline-flex items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                            aria-label="Open Career menu"
                            aria-expanded={isCareerMenuOpen}
                            aria-controls="career-menu"
                            onClick={() => {
                                setIsCareerMenuOpen((isOpen) => !isOpen);
                                setIsBrandMenuOpen(false);
                            }}
                        >
                            <img
                                className={`transition-transform ${isCareerMenuOpen ? "rotate-180" : ""}`}
                                src={arrow}
                                alt=""
                            />
                        </button>
                    </div>
                    {isCareerMenuOpen && (
                        <div
                            id="career-menu"
                            className="absolute left-1/2 top-full z-30 mt-3 h-46.5 w-45 -translate-x-1/2"
                            role="menu"
                        >
                            <img
                                className="absolute inset-0 h-full w-full"
                                src={bgMenuCareer}
                                alt=""
                                aria-hidden="true"
                            />
                            <div className="relative flex h-full flex-col justify-center gap-5 pl-5">
                                {careerMenuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        className="font-header text-[25px] leading-none text-primary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-primary"
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
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    to="/#contact-us"
                    aria-label="Contact Us"
                >
                    <img className="block" src={btnContactUs} alt="Contact Us" />
                </Link>
            </nav>
        </header>
        </div>
    );
};

export default Navbar;