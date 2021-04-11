import React from 'react'

function Header() {
    return (<>
            <header className="header fixed-top" id="header">
            <div id="nav-menu-wrap">
                <div className="container">
                    <nav className="navbar navbar-expand-lg p-0">
                        <a className="navbar-brand" title="Home" href="/">
                            <h2 className="logo-text">Bheru Lal Gameti<span>.</span></h2>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fixedNavbar"
                            aria-controls="fixedNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="togler-icon-inner">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                                <span className="line-3"></span>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse main-menu justify-content-end" id="fixedNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="/#" data-scroll-nav="1">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="/#" data-scroll-nav="2">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="/#" data-scroll-nav="3">Why Choose</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="/#" data-scroll-nav="4">Process</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link" href="/#" data-scroll-nav="5">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
