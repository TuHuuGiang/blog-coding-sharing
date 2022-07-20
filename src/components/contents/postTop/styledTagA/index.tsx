import styled from "styled-components";

interface LinkAProps {
    javascript?: boolean;
    webDesign?: boolean;
    css?: boolean;
}

export const LinkA = styled.a<LinkAProps>`
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