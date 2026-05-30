import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import './Header.scss';

const PortfolioHeader = () => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="Henry Xiao Portfolio">
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="">
              Henry Xiao
            </HeaderName>
            <HeaderNavigation aria-label="Portfolio Navigation">
              <HeaderMenuItem href="#about">About</HeaderMenuItem>
              <HeaderMenuItem href="#expertise">Expertise</HeaderMenuItem>
              <HeaderMenuItem href="#projects">Projects</HeaderMenuItem>
              <HeaderMenuItem href="#writing">Writing</HeaderMenuItem>
              <HeaderMenuItem href="#skills">Skills</HeaderMenuItem>
              <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
              onSideNavBlur={onClickSideNavExpand}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem href="#about">About</HeaderMenuItem>
                  <HeaderMenuItem href="#expertise">Expertise</HeaderMenuItem>
                  <HeaderMenuItem href="#projects">Projects</HeaderMenuItem>
                  <HeaderMenuItem href="#writing">Writing</HeaderMenuItem>
                  <HeaderMenuItem href="#skills">Skills</HeaderMenuItem>
                  <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
};

export default PortfolioHeader;

// Made with Bob
