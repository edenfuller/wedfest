import React, { Component } from 'react';
export const config = {
    sections: [
        {
            title: 'When & Where',
            body: [
                <p>The wedding ceremony and reception will be held on</p>,
                <h3 className="strong" textAlign="center">Saturday, September 29th</h3>,
                <p>at</p>,
                <h3 className="strong">Camp Hidden Valley<br />4722 Mellow Road<br />White Hall, Maryland 21161</h3>,
                <p>The camp features an outdoor ampitheater for the ceremony and an indoor reception area, as well as a covered pavilion, tennis and volleyball courts, and over three miles of hiking trails showcasing northern Maryland's natural beauty.</p>,
                <p>Schedule of events:</p>,
                <h3 className="strong">1:00-1:30 PM—Guests arrive</h3>,
                <h3 className="strong">2:00-3:00 PM—Wedding ceremony</h3>,
                <h3 className="strong">3:30-5:00 PM—Cocktail hour</h3>,
                <h3 className="strong">5:00-9:00 PM—Reception dinner</h3>,

            ]
        },
        {
            title: 'Dress Code',
            body: [
                <p>Cocktail attire. The ceremony area is about a quarter-mile walk from the parking lot via an unpaved path, so wear comfortable shoes!</p>,
                <p>As the ceremony is outside, keep an eye on the weather and plan accordingly!</p>
            ]

        },
        {
            title: 'Hotels',
            body: [
                <p>The venue is located in a rural area. There are hotels a half-hour drive to the north in Pennsylvania, as well as a half-hour to the south in Maryland.</p>,
                <a href="http://hamptoninn3.hilton.com/en/hotels/pennsylvania/hampton-inn-shrewsbury-SWYPAHX/index.html"><h3>Hampton Inn (Shrewsbury, PA)</h3></a>,
                <a href="http://www.jacksonhousebandb.com/"><h3>Jackson House Bed & Breakfast (Shrewsbury, PA)</h3></a>,
                <a href="https://www.marriott.com/hotels/travel/bwirh-residence-inn-baltimore-hunt-valley/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2"><h3>Residence Inn by Marriott (Hunt Valley, MD)</h3></a>,
            ]
        },
        // {
        //     title: 'WEDFEST',
        //     body: 'Wow, you\'re here early! Please RSVP at the link above, and check back tomorrow for more info about the wedding. We hope you\'ll join us on September 29th!'
        // },
    ]
}
