import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";

const Header = ({ headers }) => {
    return (
        <div>
            {
                headers.map((header) => (
                    <div className="Header-container" key={header._id}>
                        <div className="header-info">
                            <h4>Local SEO Tools</h4>
                            <h1>{header.name}</h1>
                            <p>{header.greeting}</p>
                            <Link href='/'>
                                <a className="trial-button">TRY FOR FREE</a>
                            </Link>
                        </div>
                        <div className="headerImg">
                            <Image src={urlFor(header.image).url()} height={550} width={1000} alt="Picture of the author" />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Header;
