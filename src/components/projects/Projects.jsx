import React, { useState } from 'react'
import "./projects.css";

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }



    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Talk is cheap! Let's delve inside Code <i class='bx bx-coffee'></i>
            </span>


            <div className="projects__container container grid">
                <div className="projects__content">



                    {/* Area for REVERB PROJECT  */}

                    <div>
                        <i className="uil uil-shield projects__icon"></i>
                        <h3 className="projects__title">Reverb - Intuitive Progression Platform</h3>

                    </div>


                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View more
                        <i className="uil uil-arrow-right projects__button-icon"></i></span>


                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Reverb - for Geeks</h3>
                            <p className="projects__modal-description">Looking for a copilot to stay ambitious? We've got you covered!</p>


                            <ul className="projects__modal-projects grid">


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Engineered a self-development platform, prompts user positively towards milestone-driven achievements.</p>
                                </li>



                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Automated features such as “SWAT Priority”, Notes, etc help in task adherence, improved SEO by 20%.
                                    </p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Technology Stack: React JS, Node JS, MongoDB
                                    </p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Role: Front End Engineer</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Link and Results: {' '}
                                        <a href="https://github.com/ankitdeb11/reverb-main">Github</a>&nbsp;<a href="https://reverb-super.vercel.app/">Live Link</a>
                                    </p>
                                </li>


                            </ul>




                        </div>
                    </div>

                </div>




                {/* AREA FOR WANDERVENTURE PROJECT */}

                <div className="projects__content">



                    <div>
                        <i className="uil uil-mountains projects__icon"></i>
                        <h3 className="projects__title">Wanderventure - Travel & Overview</h3>

                    </div>


                    <span onClick={() => toggleTab(2)} className="projects__button">View more <i className="uil uil-arrow-right projects__button-icon"></i></span>


                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Wanderventure</h3>
                            <p className="projects__modal-description">Been a long time since we've read a blog! Let's write about our recent travelling adventure with the family.</p>


                            <ul className="projects__modal-projects grid">


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Developed a user-friendly portal for planning, discovery and documentation of travelling experiences</p>
                                </li>



                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Implemented features such as venue exploration, community ratings, reviews, seamless web design, etc</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Technology Stack: React JS, Node JS, MongoDB
                                    </p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Role: Front End Engineer</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Link and Results: {' '}
                                        <a href="https://github.com/ankitdeb11/Wanderventure">GitHub Repository</a>
                                    </p>


                                </li>


                            </ul>




                        </div>
                    </div>

                </div>





                {/* AREA FOR Futurize PROJECT  */}


                <div className="projects__content">



                    <div>
                        {/* <i className="uil uil-heart-medical projects__icon"></i> */}
                        <i class="uil uil-rupee-sign projects__icon"></i>
                        <h3 className="projects__title">Futurize - Investments Guidance Platform</h3>

                    </div>


                    <span onClick={() => toggleTab(3)} className="projects__button">View more <i className="uil uil-arrow-right projects__button-icon"></i></span>


                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Futurize</h3>
                            <p className="projects__modal-description">Seeking data-driven investment success? We've got you covered. Invest with utmost confidence! </p>


                            <ul className="projects__modal-projects grid">


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">
                                        ML-driven platform optimizing investment decisions with fake news detection and advanced analytics.
                                    </p>
                                </li>



                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">
                                        Enhances user's financial decision-making process, improves efficiency by 20% and growth by 10%.
                                    </p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">
                                        Technology Stack: HTML, CSS, JavaScript, Python, Django, Flask, Ngrok, Keras, TensorFlow, ML Tools

                                    </p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>

                                    <p className="projects__modal-info">Role: Front End Developer [Live Projects will be added soon]</p>
                                </li>


                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>


                                    <p className="projects__modal-info">Link and Results: {' '}
                                        <a href="https://github.com/ankitdeb11/Futurize-ML-model">GitHub Repository</a>
                                    </p>


                                </li>


                            </ul>




                        </div>
                    </div>

                </div>




            </div>

        </section>
    )
}

export default Projects