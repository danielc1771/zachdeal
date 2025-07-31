import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutStats from '@/components/about/AboutStats';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Zach Deal | The Viking Warrior - Built By Deal',
  description: 'Meet Zach Deal, certified personal trainer and nutritionist with 15+ years of experience helping over 5,000 people transform their bodies.',
  keywords: 'Zach Deal, personal trainer, fitness coach, nutritionist, transformation, Viking Warrior',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutPhilosophy />
      <AboutCTA />
    </>
  );
}