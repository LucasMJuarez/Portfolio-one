import React from 'react';


export const Header = () => {
    return (
        <div className="container p-4">
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#nav" title="Hide navigation">
                        Hide navigation
                    </a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home" >
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                About me
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resumen
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#works">
                                Experiencia Laboral
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Repositorios
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">
                                Contacto
                            </a>
                        </li>
                    </ul>{" "}
                    {/* end #nav */}
                </nav>{" "}
                {/* end #nav-wrap */}
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Lucas Matías Juárez</h1>
                        <h3>
                            <span>Developer FullStack</span>,{" "}
                            Frontend <span>  React.Js / Vue.js / Java y NodeJS / Python</span> en Backend                                 <span>scrolling y lea mas acerca de mi</span>
                            <a className="smoothscroll" href="#about">
                            </a>
                        </h3>
                        <hr />
                        <ul className="social">
                            <li>
                                <a href="https://www.facebook.com/lucas.m.juarez.1">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/lumas89">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/lucas-matias-juarez-252308170/">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/LucasMJuarez?tab=repositories">
                                    <i className="fa fa-github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle" />
                    </a>
                </p>
            </header>
        </div >
    );
}

