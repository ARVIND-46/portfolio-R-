import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="banner">
    <h1>Hi</h1>
            <h1>I'm <span style={{color:'blue'}}>Arvind</span></h1>
            <h1>Web Designer</h1>
            <button onClick={() => window.location.href = "#Contact"}>Contact</button>

    </div>
    <div id="img">
      <img src="" alt="" />
    </div>
    </>
  )
}

export default Banner