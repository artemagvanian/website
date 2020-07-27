import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: #0d1821;
`;

const Nav = styled.nav`
  max-width: 960px;
  display: flex;
  margin: 0 auto;
`;

const NavItem = styled.div`
  margin: 20px 15px;
`;

const SiteLink = styled(Link)`
  text-decoration: none;
  color: #f0f4ef;
`;

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <Nav>
      <NavItem style={{ marginRight: "auto" }}>
        <SiteLink to="/">{siteTitle}</SiteLink>
      </NavItem>
      <NavItem>
        <SiteLink to="/about">about</SiteLink>
      </NavItem>
      <NavItem>
        <SiteLink to="/portfolio">portfolio</SiteLink>
      </NavItem>
    </Nav>
  </Header>
);

export default HeaderComponent;
