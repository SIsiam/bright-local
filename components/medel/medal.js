import React from 'react';
import medal1 from "../../images/medal/medal_1.png";
import medal2 from "../../images/medal/medal_2.png";
import medal3 from "../../images/medal/medal_3.png";
import medal4 from "../../images/medal/medal_4.png";
import stars from "../../images/medal/Stars.png";
import style from "../../styles/medel.module.css";
import Image from "next/image";


const Medal = () => {

    return (
        <div className={style.medel}>

            <section>
                <div className={style.img}>
                    <Image src={medal1} alt="Picture of the author" />
                    <div className={style.img}>
                        <Image src={stars} alt="Picture of the author" />
                    </div>
                </div>
                <div className={style.heder}>
                    <p> <span className={style.bold}>4.5 stars</span> out of 5</p>
                </div>
            </section>

            <section>
                <div className={style.img}>
                    <Image src={medal2} alt="Picture of the author" />
                    <div className={style.img}>
                        <Image src={stars} alt="Picture of the author" />
                    </div>
                </div>
                <div className={style.heder}>
                    <p> <span className={style.bold}>4.8 stars</span> out of 5</p>
                </div>
            </section>

            <section>
                <div className={style.img}>
                    <Image src={medal3} alt="Picture of the author" />
                    <div className={style.img}>
                        <Image src={stars} alt="Picture of the author" />
                    </div>
                </div>
                <div className={style.heder}>
                    <p> <span className={style.bold}>4.8 stars</span> out of 5</p>
                </div>
            </section>

            <section>
                <div className={style.img}>
                    <Image src={medal4} alt="Picture of the author" />
                    <div className={style.img}>
                        <Image src={stars} alt="Picture of the author" />
                    </div>
                </div>
                <div className={style.heder}>
                    <p> <span className={style.bold}>4.8 stars</span> out of 5</p>
                </div>
            </section>


        </div>
    );
};

export default Medal;