import React from 'react'

const Footer = ({className = ""}) => {
  return (
    <div className={`${className} 2xl:text-3xl`}>
      <p className='mb-5 font-extrabold'>Questions? Contact us.</p>
      <div className="sections flex justify-between mb-10 px-10 leading-10 2xl:leading-20 underline">
        <ul className="left cursor-pointer">
            <li>FAQ</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
        </ul>
        <ul className="middle cursor-pointer">
            <li>Help Center</li>
            <li>Invester Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
        </ul>
        <ul className="right cursor-pointer">
            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
        </ul>
      </div>
      <p className='mb-3'>Netflix Pakistan</p>
      <p>This Page is a Copy of The Original Netflix Website. visit: <a className='underline text-red-600' href="https://www.netflix.com/">Netflix</a></p>
      <p>Made By <a href="https://github.com/VicegerentPrince" className='underline text-purple-400'>Muneeb Shahzad</a></p>
    </div>
  )
}

export default Footer
