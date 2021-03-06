import React from 'react'

export const Works = () => {
    return (
        <div className="container p-4">
            <section id="works">
                <div className="row work">
                    <div className="twelve columns header-col text-center">
                        <h1>
                            <span>Experiencia Laboral</span>
                        </h1>
                    </div>
                </div>

                <div className="row work">
                    <div className="six columns main-col ">

                        <div className="row item timeline">
                            <div className="twelve columns ">
                                <div className="timeline-bullet"></div>
                                <h3>Freelance Developer</h3>
                                <p className="info">
                                    Backend / Frontend <span>•</span>
                                    <em className="date"> 2018 - Present</em>
                                </p>
                                <p>
                                                     Desarrollo y mantenimiento de sitios web, desde blogs en
                  Wordpress, Drupal y HTML/CSS/Js. Además pequeños proyectos
                  autodidactas con Vuejs, Vuex, Vuetify y Quasar como también en
                  haciendo uso de React.js, Redux y Hooks.
                                </p>
                            </div>

                        </div>

                        <div className="row item timeline">
                            <div className="twelve columns ">
                                <div className="timeline-bullet"></div>

                                <h3>Training</h3>
                                <p className="info">
                                    Training NodeJs en IncluIT <span>•</span>
                                    <em className="date">Oct 2019 - Nov 2019</em>
                                </p>
                                <p>
                                    Training Backend en NodeJs - API REST - MongoDB - Testing - Git.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="six columns main-col">
                        <div className="row item timeline">
                            <div className="twelve columns ">
                                <div className="timeline-bullet"></div>

                                <h3>Técnico Programador/ Mantenimieto</h3>
                                <p className="info">
                                    La Casa del Tambo
                                        <span>•</span>
                                    <em className="date">2010 - 2015</em>
                                </p>
                                <p>
                                    Programación de Microcontroladores (C++/JAVA).
                                    Instalación y construcciones de bretes de tambos.
                                    Instalación y puesta en marcha de motores CA.
                                    Sistemas Embebidos.
                                </p>


                            </div>
                        </div>
                        <div className="row item timeline ">
                            <div className="twelve columns ">
                                <div className="timeline-bullet"></div>
                                <h3>Técnico Electrónico</h3>
                                <p className="info">
                                    Electro Jokin <span>•</span>
                                    <em className="date">Oct 2007 - Abr 2008</em>
                                </p>
                                <p>
                                    Instalación de alarmas, cableado eléctricos, cableado de tableros
                                    electrónicos y eléctricos, reparaciones varias.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
