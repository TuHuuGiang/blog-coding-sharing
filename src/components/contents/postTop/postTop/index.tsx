import {LinkA} from "../styledTagA";

export default function PostTop() {
    return (
        <>
            <div className="container">
                <div className="post-container pt-40">
                    <div className="post">
                        <img
                            src="https://preview.colorlib.com/theme/webmag/img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp"
                            alt=""/>
                        <div className="desc">
                            <div className="desc-meta">
                                <LinkA href="" javascript>JavaScript</LinkA>
                                <span className="date">March 27, 2018</span>
                            </div>
                            <h2 className="post-title">
                                <a href="">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel
                                    Attacks</a>
                            </h2>
                        </div>
                    </div>
                    <div className="post">
                        <img
                            src="https://preview.colorlib.com/theme/webmag/img/xpost-2.jpg.pagespeed.ic.DOAToGcDYE.webp"
                            alt=""/>
                        <div className="desc">
                            <div className="desc-meta">
                                <LinkA href="">JQuery</LinkA>
                                <span className="date">March 27, 2018</span>
                            </div>
                            <h3 className="post-title">
                                <a href="">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel
                                    Attacks</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}