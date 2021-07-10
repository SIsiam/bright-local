import React from 'react';
import Image from "next/image";
import style from "../../styles/Footer.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = ({ footer }) => {
    return (
        <div >
            <div className={style.layout}>
                {
                    footer.map((f) => (
                        <section key={f._id}>
                            <div className={style.title}>
                                <h3>Products</h3>
                            </div>

                            <aside id="text-2"> <div className={style.hypen}>
                                <ul className={style.list}>
                                    <li><a href="/platform/"><strong>Platform</strong></a></li>
                                    <li><a> {f.list1} </a></li>
                                    <li><a> {f.list2} </a></li>
                                    <li><a> {f.list3} </a></li>
                                    <li><a> {f.list4} </a></li>
                                    <li><a> {f.list5} </a></li>
                                    <li><a> {f.list6} </a></li>
                                    <li><a> {f.list7} </a></li>
                                    <li><a> {f.list8} </a></li>
                                    <li><a> {f.list9} </a></li>
                                    <li><a> {f.list10} </a></li>
                                    <li><a> {f.list11} </a></li>
                                    <li><a> {f.list12} </a></li>
                                    <li><a> {f.list13} </a></li>
                                    <li><a> {f.list14} </a></li>
                                    <li><a> {f.list15} </a></li>
                                    <li><a> {f.list16} </a></li>
                                </ul>

                            </div>
                            </aside>

                        </section>
                    ))}
                {
                    footer.map((f) => (
                        <section key={f._id}>
                            <div className={style.title}>
                                <h3>Company</h3>
                            </div>

                            <aside id="text-2"> <div >
                                <ul className={style.list}>
                                    <li><a href="/platform/"><strong>Solutions</strong></a></li>
                                    <li><a> {f.list1} </a></li>
                                    <li><a> {f.list2} </a></li>
                                    <li><a> {f.list3} </a></li>
                                    <li><a> {f.list4} </a></li>
                                    <li><a> {f.list5} </a></li>
                                    <li><a> {f.list6} </a></li>
                                    <li><a> {f.list7} </a></li>
                                    <li><a> {f.list8} </a></li>
                                    <li><a> {f.list9} </a></li>
                                    <li><a> {f.list10} </a></li>
                                    <li><a> {f.list11} </a></li>
                                    <li><a> {f.list12} </a></li>
                                    <li><a> {f.list13} </a></li>
                                    <li><a> {f.list14} </a></li>
                                    <li><a> {f.list15} </a></li>
                                    <li><a> {f.list16} </a></li>
                                </ul>

                            </div>
                            </aside>

                        </section>
                    ))}
                {
                    footer.map((f) => (
                        <section key={f._id}>
                            <div className={style.title}>
                                <h3>Community</h3>
                            </div>

                            <aside id="text-2"> <div className="textwidget">
                                <ul className={style.list}>
                                    <li><a href="/platform/"><strong>Resources</strong></a></li>
                                    <li><a> {f.list1} </a></li>
                                    <li><a> {f.list2} </a></li>
                                    <li><a> {f.list3} </a></li>
                                    <li><a> {f.list4} </a></li>
                                    <li><a> {f.list5} </a></li>
                                    <li><a> {f.list6} </a></li>
                                    <li><a> {f.list7} </a></li>
                                    <li><a> {f.list8} </a></li>
                                    <li><a> {f.list9} </a></li>
                                    <li><a> {f.list10} </a></li>
                                    <li><a> {f.list11} </a></li>
                                    <li><a> {f.list12} </a></li>
                                    <li><a> {f.list13} </a></li>
                                    <li><a> {f.list14} </a></li>
                                    <li><a> {f.list15} </a></li>
                                    <li><a> {f.list16} </a></li>
                                </ul>

                            </div>
                            </aside>

                        </section>
                    ))}
            </div>
            <hr />
            <section className="social">
                <TwitterIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', margin: '4px 12px', borderRadius: '50px' }} />
                <FacebookIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
                <LinkedInIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
                <InstagramIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
                <YouTubeIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
            </section>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '7px', }}>
                <Image src="https://brightlocal-corp-assets.s3.amazonaws.com/2019/04/brightlocal_logo.svg" alt="" width={180} height={70} className="alignnone size-full wp-image-1716" />
            </div>
        </div>
    );
};

export default Footer;