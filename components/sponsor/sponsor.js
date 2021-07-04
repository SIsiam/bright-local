import React from 'react';
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

import style from "../../styles/sponsor.module.css";

const Sponsor = ({ sponsor }) => {
    return (
        <>
            <div className={style.sponsorHeading}>
                <h2 className={style.heading}> Trusted by top brands, local businesses, and agencies alike</h2>
                <div className={style.gallary}>
                    {
                        sponsor.map((sponsor) => (
                            <div key={sponsor._id}>
                                <Image src={urlFor(sponsor.image).url()} width={209} height={120} alt="Picture of the author" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Sponsor;