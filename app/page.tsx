import React from 'react';
import Images from '@/components/Images';

export default function Home() {
  const headlineStyles = {
    fontSize: '48px',
    lineHeight: '1.08349',
    fontWeight: 600,
    letterSpacing: '-.002em',
    fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif'

  };
 

  const images = [
    '/images/image2.jpg',
    '/images/image2.jpg',
    '/images/image2.jpg',
  ];

  return (
    <>
    <div className='text-center text-black ' style={{paddingBottom:'30px'}}>
      <div style={{marginTop:'30px'}}>
      <h1 style={headlineStyles} className='main' data-module-template='heroes' data-unit-id>
        Buy the things you want<br /> 
        Welcome to our financial dashboard.
      </h1>
      </div>
      <p style={{
        fontSize: '32px',
    lineHeight: '1.33337',
    fontWeight: 350,
    letterSpacing: '-.01em',
    fontFamily: '"SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif',}}>
      Welcome to our charming shop, where every corner holds a treasure.</p>
    </div>
    <Images images={images}/>
    </>
  );
}