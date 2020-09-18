import React from 'react';

export const Portfolio = () => {
    return (
        <div class="container p-4">
               <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Algunos de mis Repositorios.</h1>
                        <span style={{textAlign: 'justify', margin: '25px'}}>Enlace a Repositorios <a href="https://github.com/LucasMJuarez?tab=repositories" ><i className="fa fa-github" /></a></span>

                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img alt="" src="images/portfolio/next2.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Next.js</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-05" title>
                                        <img alt="" src="images/portfolio/vuetify.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Vuetify-card</h5>
                                                <p>Vue.js</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}
                            <div className=" columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-03" title>
                                        <img alt="" src="images/portfolio/flask.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Crud Python</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}
                            <div className=" columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-06" title>
                                        <img alt="" src="images/portfolio/crud-4.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Crud-4</h5>
                                                <p>React.js / Hooks</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}
                            <div className=" columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-04" title>
                                        <img alt="" src="images/portfolio/reactgraphql.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>React.js/ GraphQL</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> {/* item end */}
                            <div className=" columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01" title>
                                        <img alt="" src="images/portfolio/reactnotas.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>React.js</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-07" title>
                                        <img alt="" src="images/portfolio/weather.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Vue.js</h5>
                                                <p>App</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div> 
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-08" title>
                                        <img alt="" src="images/portfolio/imdb.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>React.js</h5>
                                                <p>Search Imdb</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-09" title>
                                        <img alt="" src="images/portfolio/poke.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>React.js</h5>
                                                <p>Poke Autocomplete Search</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>{/* item end */}
                        </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}

                    <div id="modal-01" className="popup-modal mfp-hide" >
                        <img className="scale-with-grid" src="images/portfolio/modals/m-reactnotas.jpg" alt="" />
                        <div className="description-box">
                            <h4>React.js</h4>
                            <span className="categories"><i className="fa fa-tag" />React.js</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/promedio-notas-react-bootstrap">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div>{/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide" >
                        <img className="scale-with-grid" src="images/portfolio/modals/m-next2.jpg" alt="" />
                        <div className="description-box">
                            <h4>Next.js</h4>
                            <span className="categories"><i className="fa fa-tag" />Next.js</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/next-users-selection">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div>{/* modal-02 End */}
                    <div id="modal-03" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-flask.jpg" alt="" />
                        <div className="description-box">
                            <h4>Crud</h4>
                            <span className="categories"><i className="fa fa-tag" />Flask</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/python-flask-react-hooks">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div>{/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-reactgraphql.jpg" alt="" />
                        <div className="description-box">
                            <h4>GraphQL</h4>
                            <span className="categories"><i className="fa fa-tag" />React.js</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/GraphQL-TaskMessages-Frontend-React">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div>{/* modal-04 End */}
                    <div id="modal-05" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-vuetify.jpg" alt="" />
                        <div className="description-box">
                            <h4>Vuetify</h4>
                            <span className="categories"><i className="fa fa-tag" />Vue.js</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/Vuetify-tasks-Vuejs">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div>{/* modal-05 End */}
                    <div id="modal-06" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-crud-4.jpg" alt="" />
                        <div className="description-box">
                            <h4>Crud - 4 </h4>
                            <span className="categories"><i className="fa fa-tag" />React.Js / Hooks</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/Hooks-crud-react-forms">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div> 
                    {/* modal-06 End */}
                    <div id="modal-07" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-weather.jpg" alt="" />
                        <div className="description-box">
                            <h4>App Weather - Vue.js </h4>
                            <span className="categories"><i className="fa fa-tag" />Vue.js</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/vue-weather-app">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div> 
                    <div id="modal-08" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-imdb.jpg" alt="" />
                        <div className="description-box">
                            <h4>Search Movies</h4>
                            <span className="categories"><i className="fa fa-tag" />React.Js / Hooks</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/imdb-searching-react">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div> 
                    <div id="modal-09" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-poke.jpg" alt="" />
                        <div className="description-box">
                            <h4>Search Autocomplete Pokemons </h4>
                            <span className="categories"><i className="fa fa-tag" />React.Js</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/LucasMJuarez/poke-autocomplete-search">Detalles</a>
                            <a className="popup-modal-dismiss" href="#portfolio">Cerrar</a>
                        </div>
                    </div> 
                </div> {/* row End */}
            </section>
        </div>
         
    );
}