import React from 'react'
import '../assets/css/Banner.css'


const Banner = ({ bannerObj }) => {
    return (
        <div className="banner">
            <p>
                { bannerObj.info }
                <span id="invite-button">
                    { bannerObj.action }
                </span>
            </p>
        </div>
    )
}

export default Banner;