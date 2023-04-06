import React from 'react'
import Styles from "./Benefits.module.css"
import PageTitle from '../PageTitle'
import Card from '../CustomCard/Card'

import { GiBookAura } from "react-icons/gi"
import { GrCertificate } from "react-icons/gr"
import { FaUserGraduate } from "react-icons/fa"
const Benefits = () => {
    let floatingCard = {
        position: "absolute",
        top: 50,
        right: 20,
        height: 50,
        width: "auto",
    }
    let cardStyles = {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        alignItems: "center",
        padding: "15px",
        height: "inherit",
        icon: { fontSize: "60px", color: "var(--basecolor)" },
        h1: { fontSize: "25px", marginBottom: 5 },
        p:{
            color: "#99999f",

        }
    }
    return (
        <div className="row">
            <div className="col-lg-6 ">
                <div className={Styles.aboutImage} style={{position:"relative"}}>
                <Card customStyle={floatingCard}>
                    <article style={{  padding:10 ,display:"flex"  ,gap:10 ,alignItems:"center"}}>
                        <section style={{ fontSize: "20px", color: "var(--basecolor)" }}>
                            <GrCertificate />

                        </section>
                        <section>
                            <h1 style={{ fontSize: "15px" }}>Learn & Grow</h1>
                        </section>
                    </article>
                </Card>
                </div>
            </div>
            <div style={{padding: 25 }} className="col-lg-6">
                <div className={Styles.div}>
                    <PageTitle pageStyles={{ backgroundColor: " " }} mainTitle="LEARN ANYTHING" subTitle="Benefits About Online Learning Expertise" content="" />
                </div>
                <Card>
                    <article style={{ ...cardStyles }}>
                        <section style={{ ...cardStyles.icon }}>
                            <GiBookAura />
                        </section>
                        <section>
                            <h1 style={{ ...cardStyles.h1 }}>Online Courses</h1>
                            <p style={{...cardStyles.p}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis qui repellat deserunt praesentium deleniti.</p>
                        </section>
                    </article>
                </Card>
                <Card>
                    <article style={{ ...cardStyles }}>
                        <section style={{ ...cardStyles.icon }}>
                            <GrCertificate />

                        </section>
                        <section>
                            <h1 style={{ ...cardStyles.h1 }}>Online Courses</h1>
                            <p  style={{...cardStyles.p}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis qui repellat deserunt praesentium deleniti laborum tempora voluptatibus voluptatem recusandae aspernatur, illo, sit quisquam alias quas cum voluptas? Ab, incidunt?</p>
                        </section>
                    </article>
                </Card>
                <Card>
                    <article style={{ ...cardStyles }}>
                        <section style={{ ...cardStyles.icon }}>
                            <FaUserGraduate />
                        </section>
                        <section>
                            <h1 style={{ ...cardStyles.h1 }}>Online Courses</h1>
                            <p  style={{...cardStyles.p}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis qui repellat deserunt praesentium deleniti laborum tempora voluptatibus voluptatem recusandae aspernatur, illo, sit quisquam alias quas cum voluptas? Ab, incidunt?</p>
                        </section>
                    </article>
                </Card>



            </div>
        </div>
    )
}

export default Benefits