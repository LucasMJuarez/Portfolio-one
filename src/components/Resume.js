import React from 'react'

export const Resume = () => {
    return (
        <div className="container p-4 flex">
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Educación</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item timeline">
                            <div className="twelve columns ">
                                <div className="timeline-bullet"></div>
                                <h3>Cursos Online - Autodidacta</h3>
                                <p className="info">
                                    React.js / Vue.js / Node.js / Python / Java <span>•</span>{" "}
                                    <em className="date">2018 - Actualidad</em>
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <div className="timeline-bullet"></div>
                                <h3>Utn - Facultad Regional Villa María</h3>
                                <p className="info">
                                    Ingenieria Electrónica (Tesis en curso) <span>•</span>{" "}
                                    <em className="date">2008-2017</em>
                                </p>
                            </div>
                        </div>{" "}
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <div className="timeline-bullet"></div>

                                <h3>Ipem 49 - Secundario Técnico</h3>
                                <p className="info">
                                    Bachiller en Electrónica <span>•</span>{" "}
                                    <em className="date">2002-2007</em>
                                </p>
                            </div>
                        </div>

                        {/* item end */}
                    </div>{" "}
                    {/* main-col end */}
                </div>{" "}
                {/* End Education */}
            </section>
        </div>
    );
}

