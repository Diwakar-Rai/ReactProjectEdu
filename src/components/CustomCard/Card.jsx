import React from 'react'

const Card = ({ children, customStyle }) => {
    let cardSytle = customStyle ? customStyle : {
        size: {
            height: "150px",
            width: "100%",

        }
    }
    return (
        <>
            <div style={{ ...cardSytle.size, ...cardSytle, marginBottom: "20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", }} className="card_container navBg ">
                {children}
            </div>

        </>
    )
}

export default Card