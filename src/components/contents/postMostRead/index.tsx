import {LinkA} from "../postTop/styledTagA";

export default function MostRead() {
    return (
        <>
            <div className="container">
                <div className="most-read">
                    <h1 className="most-read-title">Most Read</h1>
                    <div className="post-main-container">
                        <div className="post-main-left">
                            <div className="most-read-post">
                                <img
                                    src="https://preview.colorlib.com/theme/webmag/img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp"
                                    alt=""/>
                                <div className="content">
                                    <div className="most-read-post-meta">
                                        <LinkA href="" javascript>Javascript</LinkA>
                                        <span className="date">March 27, 2018</span>
                                    </div>
                                    <h4><a className="title">Pagedraw UI Builder Turns Your Website Design Mockup Into
                                        Code Automatically</a></h4>
                                    <p className="most-read-post-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                                    </p>
                                </div>
                            </div>
                            <div className="most-read-post">
                                <img
                                    src="https://preview.colorlib.com/theme/webmag/img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp"
                                    alt=""/>
                                <div className="content">
                                    <div className="most-read-post-meta">
                                        <LinkA href="" javascript>Javascript</LinkA>
                                        <span className="date">March 27, 2018</span>
                                    </div>
                                    <h4><a className="title">Pagedraw UI Builder Turns Your Website Design Mockup Into
                                        Code Automatically</a></h4>
                                    <p className="most-read-post-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                                    </p>
                                </div>
                            </div>
                            <div className="most-read-post">
                                <img
                                    src="https://preview.colorlib.com/theme/webmag/img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp"
                                    alt=""/>
                                <div className="content">
                                    <div className="most-read-post-meta">
                                        <LinkA href="" javascript>Javascript</LinkA>
                                        <span className="date">March 27, 2018</span>
                                    </div>
                                    <h4><a className="title">Pagedraw UI Builder Turns Your Website Design Mockup Into
                                        Code Automatically</a></h4>
                                    <p className="most-read-post-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                                    </p>
                                </div>
                            </div>
                            <div className="most-read-post">
                                <img
                                    src="https://preview.colorlib.com/theme/webmag/img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp"
                                    alt=""/>
                                <div className="content">
                                    <div className="most-read-post-meta">
                                        <LinkA href="" javascript>Javascript</LinkA>
                                        <span className="date">March 27, 2018</span>
                                    </div>
                                    <h4><a className="title">Pagedraw UI Builder Turns Your Website Design Mockup Into
                                        Code Automatically</a></h4>
                                    <p className="most-read-post-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                                    </p>
                                </div>
                            </div>
                            <div className="btn">
                                <button>load more</button>
                            </div>
                        </div>
                        <div className="post-main-right">
                            <h1 className="most-read-title">Categories</h1>
                            <ul>
                                <li>
                                    <a href="">
                                        Web Design
                                    </a>
                                    <LinkA className="c-white" href="" webDesign>340</LinkA>
                                </li>
                                <li>
                                    <a href="">
                                        Javascript
                                    </a>
                                    <LinkA className="c-white" href="" javascript>74</LinkA>
                                </li>
                                <li>
                                    <a href="">
                                        JQuery
                                    </a>
                                    <LinkA className="c-white" href="">41</LinkA>
                                </li>
                                <li>
                                    <a href="">
                                        Css
                                    </a>
                                    <LinkA className="c-white" href="" css>35</LinkA>
                                </li>
                            </ul>
                            <div className="tags">
                                <button className="btn-tag">Chrome</button>
                                <button className="btn-tag">Css</button>
                                <button className="btn-tag">Tutorial</button>
                                <button className="btn-tag">Backend</button>
                                <button className="btn-tag">JQuery</button>
                                <button className="btn-tag">Development</button>
                                <button className="btn-tag">Javascript</button>
                                <button className="btn-tag">Website</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}