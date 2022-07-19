import imgLogo from '../../assets/img/logo.webp';
import {navLinks} from "./nav";
import {MenuOutlined, SearchOutlined} from "@ant-design/icons";

interface LinkHeader {
    name: string;
    path: string;
    clName: string;
}

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div className="nav-logo">
                            <img src={imgLogo} alt=""/>
                        </div>
                        <ul className='nav-links'>
                            {
                                navLinks.map((link: LinkHeader, index: number) => (
                                    <li key={index}><a className={link.clName} href={link.path}>{link.name}</a></li>
                                ))
                            }
                        </ul>
                        <div className="nav-options">
                            <i className="menu">
                                <MenuOutlined/>
                            </i>
                            <i className="search">
                                <SearchOutlined/>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}