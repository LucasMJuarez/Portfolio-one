import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/lucas.m.juarez.1"><i className="fa fa-facebook" /></a></li>
                        <li><a href="https://twitter.com/lumas89"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/lucas-matias-juarez-252308170/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/LucasMJuarez?tab=repositories"><i className="fa fa-github" /></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>© Copyright 2020 - Design By Lucas M Juárez </li>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
        </footer>

    );
}
