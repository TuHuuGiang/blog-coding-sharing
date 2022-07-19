import styled from "styled-components";

interface LinkAProps {
    javascript?: boolean;
    webDesign?: boolean;
    css?: boolean;
}

const LinkA = styled.a<LinkAProps>`
  background-color: ${props => props.javascript ? '#ff8700' : props.webDesign ? '#4bb92f' : props.css ? '#0078ff' : '#8d00ff'};
  font-size: 13px;
  text-transform: uppercase;
  padding: 3px 10px;
  font-weight: 600;
  border-radius: 2px;
  margin-right: 20px;
  color: #fff;
  transition: .2s opacity;
  text-decoration: none;
`;

export default function PostTop() {
    return (
        <>
            <div className="post-container pt-40">
                <div className="post">
                    <img src="https://preview.colorlib.com/theme/webmag/img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp"
                         alt=""/>
                    <div className="desc">
                        <div className="desc-meta">
                            <LinkA href="" javascript>JavaScript</LinkA>
                            <span className="date">March 27, 2018</span>
                        </div>
                        <h2 className="post-title">
                            <a href="">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a>
                        </h2>
                    </div>
                </div>
                <div className="post">
                    <img src="https://preview.colorlib.com/theme/webmag/img/xpost-2.jpg.pagespeed.ic.DOAToGcDYE.webp"
                         alt=""/>
                    <div className="desc">
                        <div className="desc-meta">
                            <LinkA href="">JQuery</LinkA>
                            <span className="date">March 27, 2018</span>
                        </div>
                        <h3 className="post-title">
                            <a href="">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}