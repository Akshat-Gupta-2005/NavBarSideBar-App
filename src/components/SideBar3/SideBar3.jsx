import React from 'react'
import "./SideBar3.css"

const SideBar = () => {

    return (
        <>
            <i className="bx bx-home-alt icon"></i>
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="/" className="logo">
                            <span className="icon"><i className="bx bx-home-alt icon"></i></span>
                            <span className="text">How To Dev</span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span className="icon"><i className="bx bx-home-alt icon"></i></span>
                            <span className="text">Home</span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span className="icon"><i className="bx bx-home-alt icon"></i></span>
                            <span className="text">Profile</span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span className="icon"><i className="bx bx-home-alt icon"></i></span>
                            <span className="text">Notifications</span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span className="icon"><i className="bx bx-home-alt icon"></i></span>
                            <span className="text">Home</span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span className="icon"><i className="bx bx-home-alt icon"></i></span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default SideBar
