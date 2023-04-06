import React from 'react'


const PageTitle = ({ mainTitle, subTitle, content, pageStyles }) => {
  let pageStyle = {
    padding:{
      // padding:"25px"
      paddingBottom:"25px"
    },
    card: {
      backgroundColor: pageStyles.backgroundColor ? pageStyles.backgroundColor : "white",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      gap:"15px",
      width: "100%",
      fontSize: "15px"
    },
    h1: {
      color: "var(--basecolor)"
    }

  }



  return (
    <div style={{ ...pageStyle.padding }}className="page_title">
      <div style={{ ...pageStyle.card }}>
        <h2>{mainTitle}</h2>
        <h1 style={{...pageStyle.h1}} >{subTitle}</h1>

        <p>{content}</p>

      </div>
    </div>
  )
}

export default PageTitle