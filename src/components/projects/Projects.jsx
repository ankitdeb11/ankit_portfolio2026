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
            <span className="section__subtitle">Let's delve inside Product Design <i class='bx bx-coffee'></i>
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





                <div className="projects__content">

                    <div>
                        <i className="uil uil-process projects__icon"></i>
                        <h3 className="projects__title">DFlow - Workflow Orchestration Framework</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="projects__button">
                        View more <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">DFlow</h3>
                            <p className="projects__modal-description">
                                A powerful workflow orchestration framework for building scalable and reproducible data pipelines.
                            </p>

                            <ul className="projects__modal-projects grid">

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Kubernetes-native workflow engine enabling scalable and cloud-based pipeline execution.
                                    </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Supports DAG-based workflows, parallel execution, and efficient resource management.
                                    </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Technology Stack: Python, Kubernetes, Docker, Argo Workflows
                                    </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Role: Contributor / Learner
                                    </p>
                                </li>

                                {/* GitHub Link */}
                                <li className="projects__modal-project">
                                    <i className="uil uil-github projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        GitHub:{" "}
                                        <a href="https://github.com/dflow-sh/dflow" target="_blank" rel="noopener noreferrer">
                                            View Repository
                                        </a>
                                    </p>
                                </li>

                                {/* Live Website */}
                                <li className="projects__modal-project">
                                    <i className="uil uil-external-link-alt projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Live Site:{" "}
                                        <a href="https://dflow.sh/" target="_blank" rel="noopener noreferrer">
                                            Visit Official Website
                                        </a>
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