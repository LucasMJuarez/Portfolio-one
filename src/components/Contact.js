import React from 'react';

export const Contact = () => {
    return (
        <div className="container p-4">
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">Ante cualquier inquietud o proyecto/idea que desee realizar,
                        deje sus datos aquí y su consulta será atendida a la brevedad.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="eight columns">
                        {/* form */}
                        <form action method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" size={35} id="contactName" name="contactName" placeholder="name" />
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" size={35} id="contactEmail" name="contactEmail" placeholder="email" />
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" size={35} id="contactSubject" name="contactSubject" placeholder="subject" />
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" placeholder="Escriba consulta aqui" />
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form> {/* Form End */}
                        {/* contact-warning */}
                        <div id="message-warning">Ha ocurrido un error!</div>
                        {/* contact-success */}
                        <div id="message-success">
                            <i className="fa fa-check" />Tu mensajes ha sido enviado!<br />
                        </div>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Direccion y Tel</h4>
                            <p className="address">
                                Lucas Matías Juárez
                                <br />
                                Los Glaciares 1260
                                 <br />
                                 Villa María , Cordoba 5900 Argentina
                                <br />
                                <span>(353)4211819
                                </span>
                                <br />
                                <a href="lumas89@gmail.com" alt="email">lumas89@gmail.com</a>

                            </p>
                        </div>

                    </aside>
                </div>
            </section>
        </div>
    );
}
