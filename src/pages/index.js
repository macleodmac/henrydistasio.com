import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Henry DiStasio" />
      <Page useSplashScreenAnimation>
        {/*<HeroSection sectionId="hero" />*/}
        <AboutSection sectionId="about" heading="About Henry" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['blog']} />
        {/*<InterestsSection sectionId="details" heading="Details" />*/}
        {/*<ProjectsSection sectionId="features" heading="Built-in Features" />*/}
        {/*<ContactSection sectionId="github" heading="Issues?" />*/}
      </Page>
    </>
  );
}
