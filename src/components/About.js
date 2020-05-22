import React from 'react';

export const About = () => {
    return (
        <div className="container p-4">
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>Acerca de mi</h2>
                        <p>
                            Desde siempre orientado a lo que de técnica y tecnología se refiere tanto desde el plano educacional al haber asistido, primeramente a un colegio Técnico donde se tiene la oportunidad de pasar, en mayor o menor medida por distintas áreas de lo que en un futuro puedo o no ser una salida laboral, a proseguir luego de esto a ingresar a una institución como la UTN para seguir ampliando mis conocimientos y acrecentar mis oportunidades futuras.
                            Entusiasta a todo lo referido a la programación contando con conocimientos en el  Backend, utilizando tecnologias como NodeJs y Python asi como tambien en Frontend haciendo uso de  React.js, Vue.js como las principales en este apartado.
                            Habiendo realizado dentro de mi carrera, Ingenieria Electrónica, diversos proyectos de menor y media escala con Lenguajes como C++ y Java no solo para dicha carrera sino que tambien para el ambito laboral.
                         </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contacto</h2>
                                <p className="address">
                                    <span>Lucas Matías Juárez</span>
                                    <br />
                                    <span>
                                        Los Glaciares 1260
                                    <br />
                                    Villa María , Cordoba 5900 Argentina
                                    </span>
                                    <br />
                                    <span>(353)4211819</span>
                                    <br />
                                    <span>lumas89@gmail.com</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="https://media-exp1.licdn.com/dms/image/C4E2DAQHbLE-SZjXM5A/profile-treasury-document-cover-images_480/0?e=1590004800&v=beta&t=aZzKbUUwcIZJzp6HhFq7NMOrycbOw5Zj2cx4qWemGME" className="button">
                                        <i className="fa fa-file-download" />
                                    Download Resume
                                </a>
                                </p>
                            </div>
                        </div>{" "}
                        {/* end row */}
                    </div>{" "}
                    {/* end .main-col */}
                </div>
            </section>
        </div>
    );
}
