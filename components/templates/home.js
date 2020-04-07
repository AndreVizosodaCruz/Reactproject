import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { scroller } from 'react-scroll';

const Banner = dynamic(() => import('../organisms/banner'));
const WeAre = dynamic(() => import('../organisms/weAre'));
const Work = dynamic(() => import('../organisms/work'));
const Services = dynamic(() => import('../organisms/services'));
const Workfolio = dynamic(() => import('../organisms/workfolio'));
const OurTeam = dynamic(() => import('../organisms/ourTeam'));
const News = dynamic(() => import('../organisms/news'));
const Testimonials = dynamic(() => import('../organisms/testimonials'));
const Contact = dynamic(() => import('../organisms/contact'));

export default function Home() {

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    scroller.scrollTo(hash, {
      duration: 750,
      delay: 500,
      smooth: 'easeInOutQuart',
    })
  }, [])

  return (
    <>
      <Banner/>
      <WeAre/>
      <Work/>
      <Services/>
      <Workfolio/>
      <OurTeam/>
      <News/>
      <Testimonials/>
      <Contact/>
    </>
  )
}