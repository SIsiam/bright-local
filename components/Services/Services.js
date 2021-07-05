import React from 'react';
import Image from "next/image";
import style from "../../styles/layour.module.css";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";


const Services = ({ services, services2, services3, services4, services5, services6 }) => {

    return (
        <div className={style.layour}>
            {
                services.map((service) => (
                    <section className={style.singleContainer} key={service._id}>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>{service.name}</h4>
                            <h1 style={{ fontSize: '26px' }}>{service.heading}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{service.list1}</li>
                                <li>{service.list2}</li>
                                <li>{service.list3}</li>
                                <li>{service.list4}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={urlFor(service.image).url()} width={650} height={400} alt="Picture of the author" />
                        </div>
                    </section>
                ))}

            {
                services2.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className={style.img}>
                            <Image src={urlFor(s.image).url()} width={750} height={500} alt="Picture of the author" />
                        </div>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>{s.name}</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.heading}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{s.list1}</li>
                                <li>{s.list2}</li>
                                <li>{s.list3}</li>
                                <li>{s.list4}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                    </section>
                ))}


            {
                services3.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>{s.name}</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.heading}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{s.list1}</li>
                                <li>{s.list2}</li>
                                <li>{s.list3}</li>
                                <li>{s.list4}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={urlFor(s.image).url()} width={600} height={350} alt="Picture of the author" />
                        </div>
                    </section>
                ))}



            {
                services4.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>{s.name}</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.heading}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{s.list1}</li>
                                <li>{s.list2}</li>
                                <li>{s.list3}</li>
                                <li>{s.list4}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={urlFor(s.image).url()} width={600} height={350} alt="Picture of the author" />
                        </div>
                    </section>
                ))}


            {
                services5.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>{s.name}</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.heading}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{s.list1}</li>
                                <li>{s.list2}</li>
                                <li>{s.list3}</li>
                                <li>{s.list4}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={urlFor(s.image).url()} width={700} height={400} alt="Picture of the author" />
                        </div>
                    </section>
                ))}


            {
                services6.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className={style.img}>
                            <Image src={urlFor(s.image).url()} width={600} height={400} alt="Picture of the author" />
                        </div>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>{s.name}</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.heading}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{s.list1}</li>
                                <li>{s.list2}</li>
                                <li>{s.list3}</li>
                                <li>{s.list4}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                    </section>
                ))}
        </div>
    );
};

export default Services;