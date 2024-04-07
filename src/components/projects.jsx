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
                    <img src='/Images/images/background.jpg' className='h-full w-full object-cover' />
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
                                <img src="Images/images/sochiki/3.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/2.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/1.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/4.jpeg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/5.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/6.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/7.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/8.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/9.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/10.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/11.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/12.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/13.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/14.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/15.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/16.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/17.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/18.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/19.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/20.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/20.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/21.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/22.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/23.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/24.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/25.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/26.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/27.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/28.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/29.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/30.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/31.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/32.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/33.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/34.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/35.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/36.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/37.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/38.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/39.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/40.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/41.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/42.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/43.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/44.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/45.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/46.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/47.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/48.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/49.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/50.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/51.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/52.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/53.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/54.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/55.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/56.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/57.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/58.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/59.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/60.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/61.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/62.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/63.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/64.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/65.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/66.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/67.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/68.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/69.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/70.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/71.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/72.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/73.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/74.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/75.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/76.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/77.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/78.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/79.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/80.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/81.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/82.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/83.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/84.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/85.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/86.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/87.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/88.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/89.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/90.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/91.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/92.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/93.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/94.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/95.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/96.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/97.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/98.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/99.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/100.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/101.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/102.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/103.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/104.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/105.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/106.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/107.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/108.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/109.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/110.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/111.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/112.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/113.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/114.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/115.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/116.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/117.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/118.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/119.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/120.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/121.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/122.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/123.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/124.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/125.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/126.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/127.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/128.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/129.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/130.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/131.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/132.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/133.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/134.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/135.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/136.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/137.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/138.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/139.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/140.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/141.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/142.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/143.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/144.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/145.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/146.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/147.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/148.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/149.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/150.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/151.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/152.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/153.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/154.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/155.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/156.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/157.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/158.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/159.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/160.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/161.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/162.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/163.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/164.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/165.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/166.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/167.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/168.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/169.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/170.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/171.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/172.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/173.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/174.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/175.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/176.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/177.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/178.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/179.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/180.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/181.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/182.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/183.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/184.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/185.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/186.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/187.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/188.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/189.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/190.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/191.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/192.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/193.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/194.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/195.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/196.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/197.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/198.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/199.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/200.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/201.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/202.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/203.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/204.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/205.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/206.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/207.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/208.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/209.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/210.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/211.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/212.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/213.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/214.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/215.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/216.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/217.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/218.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/219.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/220.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/221.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/222.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/223.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/224.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/225.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/226.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/227.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/228.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/229.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/230.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/231.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/232.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/233.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/234.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/235.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/236.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/237.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/238.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/239.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/240.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/241.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/242.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/243.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/244.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/245.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/246.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/247.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/248.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/249.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/250.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/251.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/252.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/253.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/254.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/255.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/256.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/257.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/258.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/259.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/260.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/261.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/262.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/263.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/264.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/265.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/266.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/267.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/268.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/269.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/270.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/271.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/272.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/273.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/274.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/275.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/276.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/277.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/278.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/279.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/280.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/281.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/282.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/283.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/284.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/285.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/286.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/287.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/288.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/289.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/290.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/291.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/292.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/293.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/294.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/295.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/296.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/297.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/298.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/299.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/300.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/301.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/302.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/303.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/304.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/305.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/306.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/307.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/308.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/309.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/310.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/311.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/312.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/313.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/314.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/315.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/316.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/317.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/318.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/319.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/320.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/321.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/322.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/323.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/324.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/325.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/326.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/327.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/sochiki/328.jpg" className="w-full h-full object-cover" />
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
                                <img src="Images/images/sochiki/1.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/2.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/3.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/4.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/5.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/6.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/7.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/8.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/9.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/10.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/11.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/12.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/13.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/14.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/15.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/16.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/17.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/18.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/19.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/20.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/21.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/22.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/23.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/24.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/25.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/26.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/27.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/1/28.jpg" className="w-full h-full object-cover" />
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
                                <img src="Images/images/2/1.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/2.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/3.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/4.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/5.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/6.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/7.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/8.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/9.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/10.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/11.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/12.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/13.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/14.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/15.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/16.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/17.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/18.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/19.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/20.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/21.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/22.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/23.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/24.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/25.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/26.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/27.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="Images/images/2/28.jpg" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

                <div id='contact' className='p-10 text-justify flex flex-col gap-5'>

                    <a href="https://www.gofundme.com/f/studiumdie-ein-traum-geworden-ist?utm_campaign=p_cp+fundraiser-sidebar&utm_medium=copy_link_all&utm_source=customer" target='_blank'>If you're interested in supporting my journey in art and art studies, there are opportunities to make donations through my GoFundMe campaign. Your contribution will not only help me pursue my dreams but also play a vital role in shaping the future of my artistic endeavors. Every donation, no matter how big or small, is deeply appreciated and goes a long way in supporting my passion and aspirations</a>

                    <a href='https://houseofnewrealities.cargo.site/Patriarchat-abnippeln' target='_blank'>Click to see my last exhibition.</a>

                    <div className='w-full overflow-auto spezscroll'>

                        <div className='flex flex-nowrap'>
                            <img src="Images/images/ex/1.jpeg" className='md:w-1/2 w-full' />
                            <img src="Images/images/ex/2.jpeg" className='md:w-1/2 w-full' />
                            <img src="Images/images/ex/3.jpeg" className='md:w-1/2 w-full' />
                            <img src="Images/images/ex/4.jpeg" className='md:w-1/2 w-full' />
                        </div>

                    </div>



                </div>


            </div >
        </>
    )
}

export default Projects;
