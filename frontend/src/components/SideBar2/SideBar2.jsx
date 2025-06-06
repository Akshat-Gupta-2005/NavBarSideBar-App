import React from 'react'
import "./SideBar2.css"
import { useState } from 'react';

const SideBar = () => {

    const [vis, setvis] = useState(true)

    return (
        <>
            <div className="body">
                <nav className="sidebar ">
                    <header>
                        {/* <div className="image-text">
                            <span className="image">
                                <img src="logo192.png" alt="" />
                            </span>

                            <div className="text header-text">
                                <span className="name">Coding</span>
                                <span className="profession">Web dev</span>
                            </div>
                        </div> */}

                        <button onClick={() => { setvis(!vis) }}>
                            <i className="bx bx-chevron-right toggle">
                            </i>

                        </button>
                    </header>

                    <div className="menu-bar">
                        <div className="menu">
                            {/* <li className="search-box">
                                <i className="bx bx-search icon"></i>
                                <input type="search" placeholder="Search..." name="" id="" />
                            </li> */}
                            <ul className="menu-links">
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className={vis ? "text nav-text visible" : "text nav-text invisible"}>Dashboard</span>
                                    </a>
                                </li>
                                {/* <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="text nav-text">A</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="text nav-text">B</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="text nav-text">C</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="text nav-text">D</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="text nav-text">E</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="text nav-text">F</span>
                                    </a>
                                </li> */}


                                <div className='drop'>

                                    <details className="nav-link">
                                        <summary className="text nav-text ">
                                            <i className="bx bx-home-alt icon2 icc"></i>
                                            <span className={vis ? "visible" : "invisible"}>Teams</span>
                                        </summary>
                                        <ul className="">
                                            <li>
                                                <a href="/" className={vis ? "visible" : "invisible"}>
                                                    Banned Users
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className={vis ? "visible" : "invisible"}>
                                                    Calendar
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </div>
                                <li className="nav-link">
                                    <a href="/">
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className={vis ? "text nav-text visible" : "text nav-text invisible"}>F</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default SideBar
