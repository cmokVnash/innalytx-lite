import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Nav from './Nav'
import SignupForm from './SignupForm'

const Home = () => {
    return (
        <div className="contain">
            <header>
                <Nav />
                <div className="showcase-area">
                    <div className="container">
                        <div className="left">
                            <div className="big-title">
                                <h1 style={{ color: '#d8f3dc' }}>INNALYTX</h1>
                                <h1 style={{ color: 'lightGray' }}>
                                    Start Your Business Like A Boss
                                </h1>
                            </div>
                            <p
                                style={{
                                    width: '86%',
                                    color: 'lightGray',
                                    fontSize: '14px',
                                }}
                                className="text"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Beatae ad provident, vero quis
                                dolores ab?Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Beatae ad
                                provident, vero quis dolores ab? Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Beatae ad provident, vero quis dolores ab?
                            </p>
                            <div className="cta">
                                <Link
                                    to="/dashboard"
                                    style={{ fontWeight: 'bold' }}
                                    className="btn"
                                    href=""
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="right">
                            <div
                                style={{
                                    maxWidth: '350px',
                                    background: '#fff',
                                    borderRadius: '5px',
                                }}
                                className="wrapper"
                            >
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
