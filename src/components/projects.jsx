import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../src/components/style.css";
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Projects() {
    return (
        <>
            <div>

                <div className='w-full h-[120vh]'>
                    <img src='/images/images/background.jpg' className='h-full w-full object-cover' />
                    <p className='absolute right-7 ps-7 bottom-9 font-extralight sm:text-xl text-lg'>Every crisis could be new opportunity to explore
                        <br className='sm:block hidden' /> yourself, like Photography become for me...</p>
                </div>

                <div className='px-7 py-14 text-justify' id='about'>
                    <p>I am Mariam Kvirtia, born in Georgia and currently based in Basel, Switzerland. Born on November 7, 1996. I have studied Arts and Sciences at Ilia State University in Tbilisi, and also spent time studying at Friedrich Schiller University in Jena.</p>

                    <p>I  have always had a passion for photography since childhood. Unfortunately, my interest was interrupted when I accidentally broke my aunt's camera in the late '90s, leading me to stop taking photos.  There was a considerable hiatus before I resumed capturing moments through photography in my late twenties.
                        Despite the challenges, I remain steadfast in my conviction that each crisis holds the potential for personal growth and enlightenment.</p>

                    <p>During the pandemic, while struggling with mental health issues, I rediscovered my love for photography and began developing various projects. I found solace in capturing moments both with digital and film cameras. my grandfather, an astronomer, often photographed stars during his observations, and we would sometimes develop the images together in the darkroom. Inspired by his legacy and influenced by my time in Jena, where Carl Zeiss cameras were produced, I acquired an old film camera manufactured in Jena. This marked the beginning of my journey back into the world of photography.</p>

                    <p>Before embarking on my studies in Switzerland in 2019, I co-founded the youth society Parzival in Georgia, driven by my passion for social issues. Following this, After the pandemic, in 2022-2023, I dedicated a year to volunteering at Schloss Blumenthal., where I had the opportunity to participate in an exhibition in Augsburg and showcase my work. My photography projects often delve into social and cultural questions or serve as documentaries.</p>

                    <p>During my time at Schloss Blumenthal, I had the great opportunity to explore myself artistically, which ultimately led me to pursue my dream of studying art.</p>
                </div>

                <div id='projects'></div>

                <hr />

                <div className='flex flex-col mb-14'>

                    <div className="relative w-full h-screen">
                        <Swiper navigation={true}
                            loop={true} modules={[Navigation]} className='w-full h-full' style={{ '--swiper-navigation-color': '#ffffff' }}>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/3.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/2.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/1.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/4.JPEG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/5.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/6.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/7.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/8.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/9.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/10.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/11.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/12.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/13.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/14.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/15.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/16.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/17.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/18.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/19.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/20.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/20.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/21.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/22.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/23.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/24.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/25.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/26.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/27.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/28.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/29.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/30.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/31.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/32.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/33.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/34.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/35.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/36.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/37.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/38.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/39.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/40.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/41.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/42.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/43.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/44.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/45.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/46.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/47.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/48.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/49.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/50.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/51.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/52.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/53.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/54.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/55.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/56.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/57.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/58.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/59.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/60.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/61.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/62.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/63.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/64.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/65.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/66.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/67.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/68.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/69.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/70.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/71.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/72.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/73.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/74.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/75.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/76.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/77.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/78.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/79.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/80.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/81.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/82.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/83.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/84.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/85.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/86.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/87.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/88.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/89.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/90.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/91.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/92.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/93.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/94.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/95.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/96.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/97.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/98.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/99.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/100.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/101.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/102.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/103.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/104.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/105.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/106.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/107.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/108.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/109.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/110.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/111.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/112.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/113.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/114.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/115.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/116.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/117.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/118.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/119.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/120.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/121.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/122.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/123.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/124.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/125.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/126.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/127.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/128.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/129.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/130.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/131.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/132.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/133.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/134.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/135.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/136.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/137.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/138.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/139.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/140.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/141.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/142.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/143.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/144.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/145.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/146.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/147.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/148.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/149.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/150.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/151.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/152.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/153.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/154.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/155.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/156.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/157.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/158.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/159.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/160.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/161.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/162.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/163.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/164.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/165.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/166.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/167.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/168.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/169.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/170.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/171.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/172.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/173.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/174.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/175.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/176.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/177.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/178.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/179.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/180.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/181.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/182.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/183.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/184.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/185.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/186.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/187.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/188.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/189.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/190.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/191.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/192.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/193.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/194.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/195.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/196.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/197.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/198.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/199.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/200.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/201.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/202.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/203.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/204.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/205.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/206.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/207.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/208.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/209.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/210.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/211.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/212.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/213.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/214.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/215.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/216.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/217.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/218.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/219.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/220.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/221.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/222.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/223.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/224.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/225.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/226.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/227.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/228.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/229.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/230.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/231.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/232.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/233.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/234.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/235.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/236.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/237.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/238.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/239.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/240.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/241.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/242.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/243.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/244.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/245.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/246.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/247.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/248.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/249.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/250.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/251.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/252.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/253.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/254.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/255.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/256.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/257.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/258.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/259.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/260.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/261.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/262.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/263.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/264.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/265.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/266.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/267.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/268.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/269.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/270.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/271.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/272.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/273.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/274.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/275.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/276.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/277.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/278.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/279.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/280.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/281.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/282.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/283.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/284.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/285.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/286.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/287.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/288.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/289.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/290.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/291.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/292.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/293.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/294.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/295.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/296.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/297.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/298.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/299.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/300.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/301.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/302.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/303.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/304.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/305.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/306.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/307.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/308.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/309.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/310.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/311.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/312.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/313.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/314.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/315.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/316.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/317.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/318.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/319.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/320.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/321.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/322.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/323.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/324.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/325.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/326.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/327.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/sochiki/328.JPG" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className='flex sm:flex-row flex-col py-7 '>
                        <div className='px-8 text-5xl font-bold flex sm:flex-col flex-row gap-3  items-center'>
                            <p>S</p>
                            <p>O</p>
                            <p>C</p>
                            <p>H</p>
                            <p>I</p>
                            <p>K</p>
                            <p>I</p>
                        </div>
                        <div className='text-justify px-7 xl:text-base text-sm  flex flex-col lg:py-0 py-7 gap-1'>
                            <p>He opened his eyes and no longer knew how much sorrow he could take.</p>
                            <p>He looked at the gas counter box and the numbers spinning on it and the fate spinning on the numbers. What determines the destiny of a person ?</p>

                            <p>In gladiatorial battles, the direction of the emperor's finger determined life. In the Open Ocean the stars showed the way, in the room of Prophet, where the candles are burning, the key of fate is depended on the cards, In Philosophy and Theosophy there were talks and discussions about battle Between the God and human, how the human being can handle own destiny, but now the "Sochik"1  determined the fate of the beings, this merciless counter, A ruthless meter that looks the same in village or city and is slowly diggingintopeople’s lives at increased number rates in every minute. The fate of the people was slowly following the spin of the moving numbers on the Machine.</p>

                            <p>He Watched.</p>

                            <p>The combination of numbers was growing and changing in a minute, and how many more could create in this little box, not knowing how it writes the fate of each person in numbers, each penny that would eventually will be count from "gas man." 2 He was suffering from these questions, this reality, where is our</p>

                            <p>freedom of choice or free will, why do</p>

                            <p>we live to finally</p>

                            <p>depend on the</p>

                            <p>meter and the machines?!</p>

                            <p>He felt pain and</p>

                            <p>wanted to go out.</p>

                            <p>He Went and saw cabels, wires, drying toys hanging in the yard, houses and of course, he looked the counter boxes. No house stood without a counter, the numbers were spinning, fate was being written, but the man himself was nowhere to be seen. We become people of iron, humans of</p>

                            <p>n</p>
                            <p>u</p>
                            <p>m</p>
                            <p>b</p>
                            <p>e</p>
                            <p>r</p>
                            <p>s</p>
                            <p>a</p>
                            <p>n</p>
                            <p>d</p>
                            <p>c</p>
                            <p>a</p>
                            <p>b</p>
                            <p>l</p>
                            <p>e</p>
                            <p>s</p>
                            <p>.</p>
                            <p>H</p>
                            <p>o</p>
                            <p>m</p>
                            <p>o</p>
                            <p>F</p>
                            <p>a</p>
                            <p>b</p>
                            <p>e</p>
                            <p>r</p>
                            <p>s</p>
                            <p>!</p>
                            <p>H</p>
                            <p>e</p>
                            <p>t</p>
                            <p>h</p>
                            <p>o</p>
                            <p>u</p>
                            <p>g</p>
                            <p>h</p>
                            <p>t</p>
                            <p>a</p>
                            <p>n</p>
                            <p>d</p>
                            <p>f</p>
                            <p>e</p>
                            <p>e</p>
                            <p>l</p>
                            <p>e</p>
                            <p>d</p>
                            <p>p</p>
                            <p>a</p>
                            <p>i</p>
                            <p>n</p>
                            <p>e</p>
                            <p>d</p>
                            <p>.</p>
                            <p>S</p>
                            <p>h</p>
                            <p>o</p>
                            <p>u</p>
                            <p>t</p>
                            <p>e</p>
                            <p>d</p>
                            <p>l</p>
                            <p>o</p>
                            <p>u</p>
                            <p>d</p>
                            <p>l</p>
                            <p>y</p>

                            <p>No one could understand or will be either no one wanted to understand.</p>

                            <p>Only one, masked man with hungry eyes look at him, but he was still glad to see the man, see a living man, because he loved life so much.</p>

                            <p>The social existence of man as an individual is becoming more and more complex in the modern digital, industrial and pandemic period. Economic, social and existential issues have arisen in our time. My work is about starting social changes that directly affect people and their destiny. I tried to express through photography the existing crises, the distance from nature and the invasion of machines, technologies intothehuman fate. Unemploymentand theeconomiccrisis directlychanged people’slives,which was reflected in the direct relationship between man and the Gas counter-meter, their destiny and future, the economic crisis changed and the question of existence arose in the country. The inspiration for my work was one day, when I was for a walk and hear speech between man and woman from the window, arguing over tax payments and future hopelessness.
                            </p>

                            <p>1.Sochick- russian word for counter meter of Gas, which will be used per Family in a month. Is usefull after soviet Union in georgian Language</p>

                            <p>2.Gas-Man- A Man who comes every month in family and counts the numbers from box, how much gas the family used.</p>

                        </div>

                    </div>


                </div >

                <div className='flex lg:flex-row flex-col mb-20'>

                    <div className="relative lg:w-1/2 w-full h-screen max-h-[480px]">
                        <Swiper navigation={true}
                            loop={true} modules={[Navigation]} className='w-full h-full' style={{ '--swiper-navigation-color': '#ffffff' }}>
                            <SwiperSlide>
                                <img src="/images/images/1/1.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/2.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/3.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/4.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/5.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/6.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/7.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/8.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/9.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/10.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/11.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/12.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/13.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/14.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/15.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/16.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/17.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/18.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/19.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/20.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/21.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/22.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/23.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/24.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/25.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/26.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/27.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/1/28.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className='lg:w-1/2 w-full text-justify px-7 xl:text-base text-sm  flex flex-col justify-center items-center lg:py-0 py-7 '>

                        <p>Film photography holds a special place in my heart. Unlike digital photography, where instant gratification is the norm, shooting with film requires a more deliberate and mindful approach. With film cameras, every shot feels like a carefully crafted moment, a dance between light and shadow, anticipation and surprise.</p>
                        <p>There's a unique magic to shooting with film – you never quite know what you'll get until you develop the roll. This element of unpredictability adds an extra layer of excitement and mystery to the process. Each frame becomes a treasure waiting to be unveiled, a testament to the serendipity of analog photography.</p>
                        <p>My journey into film photography began as a curiosity, but quickly evolved into a passion. It became a form of visual storytelling, a way to document and observe the nuances of everyday life and the environment around me. Through the lens of my film camera, I found a deeper connection to my surroundings, a heightened awareness of the fleeting moments that make up our existence.</p>
                        <p>Film photography is not just about capturing images; it's about embracing the imperfections, celebrating the happy accidents, and finding beauty in the unexpected. It's a timeless art form that encourages patience, creativity, and a willingness to embrace the unknown. And for me, that's what makes it truly magical.</p>
                    </div>


                </div>

                <div className='flex lg:flex-row flex-col mb-20'>

                    <div className='lg:w-1/2 w-full text-justify px-7 xl:text-base text-sm  flex flex-col justify-center items-center lg:py-0 py-7 '>

                        <p>I also embarked on a project capturing Ethno Details in my village, skillfully documenting the intricate elements that embody the essence of Georgian soul and everyday life culture. Using nothing but my mobile phone, I aimed to showcase the beauty found in the smallest of details, offering a glimpse into the rich tapestry of our heritage</p>
                    </div>

                    <div className="relative lg:w-1/2 w-full h-screen max-h-[480px]">
                        <Swiper navigation={true}
                            loop={true} modules={[Navigation]} className='w-full h-full' style={{ '--swiper-navigation-color': '#ffffff' }}>
                            <SwiperSlide>
                                <img src="/images/images/2/1.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/2.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/3.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/4.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/5.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/6.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/7.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/8.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/9.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/10.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/11.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/12.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/13.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/14.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/15.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/16.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/17.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/18.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/19.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/20.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/21.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/22.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/23.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/24.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/25.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/26.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/27.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/images/2/28.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

                <div id='contact' className='p-10 text-justify flex flex-col gap-5'>

                    <a href="https://www.gofundme.com/f/studiumdie-ein-traum-geworden-ist?utm_campaign=p_cp+fundraiser-sidebar&utm_medium=copy_link_all&utm_source=customer" target='_blank'>If you're interested in supporting my journey in art and art studies, there are opportunities to make donations through my GoFundMe campaign. Your contribution will not only help me pursue my dreams but also play a vital role in shaping the future of my artistic endeavors. Every donation, no matter how big or small, is deeply appreciated and goes a long way in supporting my passion and aspirations</a>

                    <a href='https://houseofnewrealities.cargo.site/Patriarchat-abnippeln' target='_blank'>Click to see my last exhibition.</a>

                    <div className='w-full overflow-auto spezscroll'>

                        <div className='flex flex-nowrap'>
                            <img src="/images/images/ex/1.jpeg" className='md:w-1/2 w-full' />
                            <img src="/images/images/ex/2.jpeg" className='md:w-1/2 w-full' />
                            <img src="/images/images/ex/3.jpeg" className='md:w-1/2 w-full' />
                            <img src="/images/images/ex/4.jpeg" className='md:w-1/2 w-full' />
                        </div>

                    </div>



                </div>


            </div >
        </>
    )
}

export default Projects;
