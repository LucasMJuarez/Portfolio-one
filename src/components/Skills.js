import React from 'react';

export const Skills = () => {
    return (
        <div className="container p-4">
            <section id="skills">
                <div className="row skill">
                    <div className="two columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="five columns main-col">
                        <h2>
                            <span>Web Developement</span>
                        </h2>
                        <div className="bars">
                            <ul className="skills">
                                <li>
                                    <span className="bar-expand react" />
                                    <em>React.js</em>
                                </li>
                                <li>
                                    <span className="bar-expand vue" />
                                    <em>Vue.js</em>
                                </li>
                                <li>
                                    <span className="bar-expand node" />
                                    <em>Node.js</em>
                                </li>
                                <li>
                                    <span className="bar-expand django" />
                                    <em>Django</em>
                                </li>
                                <li>
                                    <span className="bar-expand html" />
                                    <em>Html/CSS/JS</em>
                                </li>
                                <li>
                                    <span className="bar-expand drupal" />
                                    <em>Drupal</em>
                                </li>
                                <li>
                                    <span className="bar-expand ionic" />
                                    <em>Ionic</em>
                                </li>
                                <li>
                                    <span className="bar-expand boot" />
                                    <em>Bootstrap 4</em>
                                </li>
                                <li>
                                    <span className="bar-expand api" />
                                    <em>API-REST</em>
                                </li>
                                <li>
                                    <span className="bar-expand graph" />
                                    <em>GraphQL</em>
                                </li>
                            </ul>
                        </div>
                        {/* end skill-bars */}
                    </div>{" "}
                    {/* main-col end */}
                    <div className="five columns main-col">
                        <h2>
                            <span> Software Developement                                </span>
                        </h2>
                        <div className="bars">
                            <ul className="skills">
                                <li>
                                    <span className="bar-expand-3 java" />
                                    <em>Java</em>
                                </li>
                                <li>
                                    <span className="bar-expand-3 python" />
                                    <em>Python</em>
                                </li>
                                <li>
                                    <span className="bar-expand-3 c" />
                                    <em>C++</em>
                                </li>
                                <li>
                                    <span className="bar-expand-3 cc" />
                                    <em>C#</em>
                                </li>
                            </ul>
                        </div>
                        {/* end skill-bars */}
                        <h2>
                            <span> Bases de datos    </span>
                        </h2>
                        <div className="bars">
                            <ul className="skills">
                                <li>
                                    <span className="bar-expand-2 mongo" />
                                    <em>MongoDB</em>
                                </li>
                                <li>
                                    <span className="bar-expand-2 post" />
                                    <em>PostgreSQL</em>
                                </li>
                                <li>
                                    <span className="bar-expand-2 mysql" />
                                    <em>MySQL</em>
                                </li>
                            </ul>
                        </div>

                    </div>{" "}
                    {/* main-col end */}
                </div>
            </section>
        </div>
    );
}

