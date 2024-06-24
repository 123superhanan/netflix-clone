import React from 'react'
import "./Footer.css"
import Youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"




const Footer = () => {

  return (

    <div className='Footer'>

      <div className="footer-icon">
      <img src={Youtube_icon} alt="---footer-icon-yt" />
      <img src={twitter_icon} alt="---footer-icon-x" />
      <img src={instagram_icon} alt="---footer-icon-ins" />
      <img src={facebook_icon} alt="---footer-icon-fb" />
      </div>
<ul>
<li>AUDIO DESCRIPTION</li>
<li>Help Centre</li>
<li>Gift Card</li>
<li>Media Centre</li>
<li>Invester Relation</li>
<li>Jobs</li>
<li>Term Of Use</li>
<li>Privacy</li>
<li>Legal</li>
<li>Cookies Prefernces</li>
<li>Cooperate Information</li>
<li>Contact Us</li>
</ul>
<p className='Copyright-txt'>
  c 1997-2024 Netflix, Inc.
</p>
    </div>

  )
}

export default Footer
