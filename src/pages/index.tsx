import { loadPortfolioData } from '@/sdk/loadPortfolioData';
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  callToAction: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  callToAction,
}) => (
  <div style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <button>{callToAction}</button>
  </div>
);

interface AboutUsProps {
  title: string;
  description: string;
  imageUrl: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ title, description, imageUrl }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <img src={imageUrl} alt='About Us' />
  </div>
);

interface ProjectProps {
  title: string;
  description: string;
  workDetails: string[];
  mediaUrls: string[];
  videoUrl?: string;
  techStackKeywords: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  workDetails,
  mediaUrls,
  videoUrl,
  techStackKeywords,
}) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    {workDetails?.map(detail => (
      <p key={detail}>{detail}</p>
    ))}
    {mediaUrls?.map(url => (
      <img key={url} src={url} alt={title} />
    ))}
    {videoUrl && <video src={videoUrl} controls />}
    <ul>
      {techStackKeywords?.map(keyword => (
        <li key={keyword}>{keyword}</li>
      ))}
    </ul>
  </div>
);

const StudioAkmePage: React.FC<{
  data: {
    studioAkme: {
      heroSection: HeroSectionProps;
      aboutUs: AboutUsProps;
      projects: ProjectProps[];
    };
  };
}> = ({ data }) => (
  <div>
    <HeroSection {...data.studioAkme.heroSection} />
    <AboutUs {...data.studioAkme.aboutUs} />
    {data.studioAkme?.projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>
);

export async function getStaticProps() {
  const data = await loadPortfolioData();
  console.log(data)
  return {
    props: { data },
  };
}

export default StudioAkmePage;
