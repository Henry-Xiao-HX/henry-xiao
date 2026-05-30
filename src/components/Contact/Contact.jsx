import React from 'react';
import { Grid, Column } from '@carbon/react';
import { Email, LogoLinkedin, LogoGithub, Edit } from '@carbon/icons-react';
import './Contact.scss';

const Contact = () => {
  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      value: 'your-email@example.com',
      href: 'mailto:your-email@example.com',
      icon: Email,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/henry-xiao',
      href: 'https://linkedin.com/in/henry-xiao',
      icon: LogoLinkedin,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/henry-xiao',
      href: 'https://github.com/henry-xiao',
      icon: LogoGithub,
    },
    {
      id: 'medium',
      label: 'Medium',
      value: 'medium.com/@henry-xiao',
      href: 'https://medium.com/@henry-xiao',
      icon: Edit,
    },
  ];

  return (
    <section id="contact" className="contact-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Get in Touch</h2>
        </Column>
        <Column lg={6} md={3} sm={4} className="contact-info-col">
          <div className="contact-info">
            <h3 className="contact-info__title">Connect with me:</h3>
            <p className="contact-info__description">
              I'm always interested in discussing data engineering, AI agents, 
              and enterprise architecture. Feel free to reach out!
            </p>
          </div>
        </Column>
        <Column lg={10} md={5} sm={4}>
          <div className="contact-links">
            {contactLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div className="contact-link__icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="contact-link__content">
                    <span className="contact-link__label">{link.label}</span>
                    <span className="contact-link__value">{link.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Contact;

// Made with Bob
