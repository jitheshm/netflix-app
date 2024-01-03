import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className="footer">
    <div><span><br />Questions? Contact Us<br /><br /></span></div>
    <div className="footer-data">
      <div className="col-md-3 col-6">
        <p>FAQ</p>
        <p>Investor Relations<br /></p>
        <p>Privacy<br /></p>
        <p>Speed Test<br /></p>
      </div>
      <div className="col-md-3 col-6">
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Cookie Preferences</p>
        <p>Legal Notices</p>
      </div>
      <div className="col-md-3 col-6">
        <p>Account</p>
        <p>Ways to Watch</p>
        <p>Corporate Information</p>
        <p>Only on Netflix</p>
      </div>
      <div className="col-md-2 col-6">
        <p>Media Center</p>
        <p>Terms to Use</p>
        <p>Contact Us</p>
      </div>
    </div>
  </section>
  )
}

export default Footer