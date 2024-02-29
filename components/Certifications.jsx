'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import CertificationCard from '@/components/CertificationCard';

const certificationData = [
    {
      image: '/certification/ReactJs.PNG',
      category: 'front-end',
      name:'ReactJs',
    },
    {
        image: '/certification/az-900.PNG',
        category: 'back-end',
        name:'Microsoft Azure Fundamentals',
    },
    {
      image: '/certification/apiRestful.PNG',
      category: 'back-end',
      name:'Api Restful',
    },
    {
      image: '/certification/az-900.PNG',
      category: 'back-end',
      name:'Microsoft Azure AI Fundamentals',
    },
];

const Certifications = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 xl:ml-auto text-center xl:text-right mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-end">
            <h2 className="section-title mb-4"> Certifications </h2>
            <p className="subtitle mb-8">Explore the certifications that attest to my expertise and quest for excellence.</p>
            <Link href='/certifications'><Button>All certifications</Button></Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute left-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable: true}}>
            {/* show only the first 4 projetcs for the slides */}
            {certificationData.slice(0, 4).map((certification , index) =>
            {
              return (
                <SwiperSlide key={index}>
                  <CertificationCard certification={certification}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Certifications;