import React from 'react';
import style from "../../styles/medel.module.css";
import Image from "next/image";

import { urlFor } from "../../lib/sanity";


const Medel = ({ Medel }) => {
    return (
        <div className={style.medel}>
            {
                Medel.map((m) => (
                    <section key={m._id}>
                        <div className={style.img}>
                            <Image src={urlFor(m.image).url()} height={140} width={280} alt="Picture of the author" />
                            <div className={style.img}>
                                <Image src={urlFor(m.starImg).url()} height={30} width={180} alt="Picture of the author" />
                            </div>
                        </div>
                        <div className={style.heder}>
                            <p> <span className={style.bold}>{m.rating}</span> out of 5</p>
                        </div>
                    </section>
                ))}
        </div>
    );
};

export default Medel;