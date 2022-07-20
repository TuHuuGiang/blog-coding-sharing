import {LinkA} from "../../styledTagA";

export default function PostMostRead() {
    return (
        <>
            <div className="post-most-container">
                <h1 className="post-most-title">Most Read</h1>
                <div className="post-most">
                    <div className="post-small">
                        <img src="https://preview.colorlib.com/theme/webmag/img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp" alt=""/>
                        <a href="">Tell-A-Tool: Guide To Web Design And Development Tools</a>
                    </div>
                    <div className="post-small">
                        <img src="https://preview.colorlib.com/theme/webmag/img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp" alt=""/>
                        <a href="">Tell-A-Tool: Guide To Web Design And Development Tools</a>
                    </div>
                    <div className="post-small">
                        <img src="https://preview.colorlib.com/theme/webmag/img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp" alt=""/>
                        <a href="">Tell-A-Tool: Guide To Web Design And Development Tools</a>
                    </div>
                    <div className="post-small">
                        <img src="https://preview.colorlib.com/theme/webmag/img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp" alt=""/>
                        <a href="">Tell-A-Tool: Guide To Web Design And Development Tools</a>
                    </div>
                </div>
                <h1 className="post-most-title">Featured Posts</h1>
                <div className="post-medium-content pt-40">
                    <div className="post-medium">
                        <img
                            src="https://preview.colorlib.com/theme/webmag/img/xpost-2.jpg.pagespeed.ic.DOAToGcDYE.webp"
                            alt=""/>
                        <div className="post-medium-meta">
                            <LinkA href="" webDesign>Web Design</LinkA>
                            <span className="date">March 27, 2018</span>
                        </div>
                        <h4 className="post-medium-title">Pagedraw UI Builder Turns Your Website Design
                            Mockup
                            Into
                            Code Automatically</h4>
                    </div>
                    <div className="post-medium">
                        <img
                            src="https://preview.colorlib.com/theme/webmag/img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp"
                            alt=""/>
                        <div className="post-medium-meta">
                            <LinkA href="" webDesign>Web Design</LinkA>
                            <span className="date">March 27, 2018</span>
                        </div>
                        <h4 className="post-medium-title">Pagedraw UI Builder Turns Your Website Design
                            Mockup
                            Into
                            Code Automatically</h4>
                    </div>
                </div>
            </div>
        </>
    );
}