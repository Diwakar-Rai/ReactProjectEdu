import React from 'react'
import pricingStyle from './Pricing.module.css'
import Card from '../CustomCard/Card'
import { BsCurrencyRupee } from 'react-icons/bs';

const Pricing = () => {
    let pricingData = [


        { planName: "BASIC PLAN", price: "47k", planContent: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        { planName: "BEGINNER PLAN", price: "79k", planContent: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        { planName: "PREMIUM PLAN", price: "102k", planContent: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
        { planName: "ULTIMATE PLAN", price: "147k", planContent: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." }
    ]
    return (
        <>
            <section className={`${pricingStyle.section} bgGrey`}>
                <div className="container pt" >
                    <div className={`${pricingStyle.course_title} row`}>
                        <div className="col-lg-10 textCenter">
                            <span className={` ${pricingStyle.subheading}`}>OUR PRICING</span>
                            <h2 className={` ${pricingStyle.Courseh2}`}>Pricing & Packages</h2>
                        </div>
                    </div>
                    <div className={`${pricingStyle.mainContent} row`}>
                        {pricingData.map((item, index) => {
                            return (
                                <div className={`${pricingStyle.pricingCol}`}>
                                    <Card customStyle={{ height: "auto" ,background:"#FFFF"}}>
                                        <div className="block-7" style={{padding:"10px"}}>
                                            <div className={`${pricingStyle.priceText} textCenter`}>
                                                <span className={`${pricingStyle.excerpt}`}>{item.planName}</span>
                                                <span className="price"><sup style={{
                                                    fontSize: "24px",
                                                    top: "-0.8em",
                                                    color: "gray"
                                                }}><BsCurrencyRupee /></sup> <span className={`${pricingStyle.number}`}>{item.price}</span></span>
                                                <div >
                                                    <p style={{
                                                        lineHeight: 1.6,
                                                        color: "grey"
                                                    }}>
                                                        {item.planContent}</p>
                                                </div>
                                                <a href="#" className={`${pricingStyle.pricingBtn}`}>Get Started</a>
                                            </div>
                                        </div>
                                    </Card>
                                </div>

                            )
                        })}
                    </div>
                </div >
            </section >

        </>
    )
}

export default Pricing