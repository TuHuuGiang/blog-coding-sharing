import imgLogo from '../../assets/img/logo.webp';

export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="footer-info-web">
                        <img src={imgLogo} alt=""/>
                        <div className="links">
                            <a href="">Privacy Policy</a>
                            <a href="">Advertisement</a>
                        </div>
                        <p className="copyright">
                            © Copyright ©2022 All rights reserved | This template is made with ❤ by Colorlib
                        </p>
                    </div>
                    <div className="footer-links"></div>
                    <div className="footer-widget"></div>
                </div>
            </div>
        </>
    );
}