import React from 'react'
import CounterStyle from './Counter.module.css'
import { FaUserGraduate } from "react-icons/fa"
import CountUp from 'react-countup';

const Counter = () => {

    return (
        <>
            <section className={`${CounterStyle.counter_section} imgBackground`}>
                <div className="overlay"></div>
                <div className={`container ${CounterStyle.counter_container}`} >
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={`${CounterStyle.counter_wrapper}`}>
                                <div className={`${CounterStyle.counter_icon}`}>

                                    <FaUserGraduate />
                                </div>
                                <div className="text">
                                    <h2 className={`${CounterStyle.counter_number}`}>
                                        <CountUp start={200} end={3056} duration={4.34} suffix='+'/>
                                    </h2>
                                    <span className={`${CounterStyle.span}`}>SUCCESS STORIES</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className={`${CounterStyle.counter_wrapper}`}>
                                <div className={`${CounterStyle.counter_icon}`}>

                                    <FaUserGraduate />
                                </div>
                                <div className="text">
                                    <h2 className={`${CounterStyle.counter_number}`}>320</h2>
                                    <span className={`${CounterStyle.span}`}>TRUSTED TUTORS</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className={`${CounterStyle.counter_wrapper}`}>

                                <div className={`${CounterStyle.counter_icon}`}>

                                    <FaUserGraduate />
                                </div>
                                <div className="text">
                                    <h2 className={`${CounterStyle.counter_number}`}>1,000</h2>
                                    <span className={`${CounterStyle.span}`}>SCHEDULES</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className={`${CounterStyle.counter_wrapper}`}>
                                <div className={`${CounterStyle.counter_icon}`}>

                                    <FaUserGraduate />
                                </div>
                                <div className="text">
                                    <h2 className={`${CounterStyle.counter_number}`}>587</h2>
                                    <span className={`${CounterStyle.span}`}>COURSES</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Counter