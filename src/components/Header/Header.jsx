import { useLocation, Link, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { LogoGithub, LogoLinkedin } from '@carbon/icons-react';
import { personalInfo } from '../../data/siteData';
import './Header.scss';

/**
 * Primary nav items — shared between the desktop HeaderNavigation and the
 * mobile SideNav. Each entry may have an optional `to` override for the
 * side nav (e.g. to surface the "All X" deep-link on mobile only).
 *
 * Shape: { label, to, sectionId? }
 *   sectionId – if set, clicking from a non-home page navigates to /#sectionId
 *   sideNavOnly – if true, the item appears only in the mobile SideNav
 */
const NAV_ITEMS = [
  { label: 'About',          to: '/',  sectionId: 'about' },
  { label: '2026 Highlights',to: '/',  sectionId: 'milestones' },
  { label: 'Projects',       to: '/',  sectionId: 'projects',
    sideNavExtra: { label: 'All Projects',  to: '/projects' } },
  { label: 'Articles',       to: '/',  sectionId: 'writing',
    sideNavExtra: { label: 'All Articles',  to: '/writing' } },
  { label: 'Architectures',  to: '/architecture' },
  { label: 'Expertise',      to: '/',  sectionId: 'expertise' },
  { label: 'Contact',        to: '/',  sectionId: 'contact' },
];

const PortfolioHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleSectionClick = (sectionId) => (e) => {
    if (!sectionId) return;
    e.preventDefault();
    if (isHomePage) {
      // Already on the home page — just scroll directly.
      scrollToSection(sectionId);
    } else {
      // Navigate to home first; ScrollToHashElement in App.jsx will scroll
      // once the page mounts.
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label={`${personalInfo.name} Portfolio`}>
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName element={Link} to="/" prefix="">
              {personalInfo.name}
            </HeaderName>

            {/* Desktop nav */}
            <HeaderNavigation aria-label="Portfolio Navigation">
              {NAV_ITEMS.map(({ label, to, sectionId }) => (
                <HeaderMenuItem
                  key={sectionId || to}
                  element={Link}
                  to={to}
                  onClick={handleSectionClick(sectionId)}
                >
                  {label}
                </HeaderMenuItem>
              ))}
            </HeaderNavigation>

            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="GitHub Profile"
                tooltipAlignment="end"
                onClick={() => window.open(`https://github.com/${personalInfo.github}`, '_blank')}
              >
                <LogoGithub size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="LinkedIn Profile"
                tooltipAlignment="end"
                onClick={() => window.open(`https://linkedin.com/in/${personalInfo.linkedin}`, '_blank')}
              >
                <LogoLinkedin size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>

            {/* Mobile side nav */}
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
              onSideNavBlur={onClickSideNavExpand}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  {NAV_ITEMS.flatMap(({ label, to, sectionId, sideNavExtra }) => {
                    const primary = (
                      <HeaderMenuItem
                        key={sectionId || to}
                        element={Link}
                        to={to}
                        onClick={handleSectionClick(sectionId)}
                      >
                        {label}
                      </HeaderMenuItem>
                    );
                    if (!sideNavExtra) return [primary];
                    return [
                      primary,
                      <HeaderMenuItem key={sideNavExtra.to} element={Link} to={sideNavExtra.to}>
                        {sideNavExtra.label}
                      </HeaderMenuItem>,
                    ];
                  })}
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
