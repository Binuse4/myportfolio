'use client';
import Image from 'next/image';
import { Card , CardTitle , CardDescription , CardHeader } from '@/components/ui/card';
import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const reviewData = [
    {
        avatar: '/reviews/avatar_man.jpg',
        name: ' Sébastien Serais',
        job : 'Teacher at ESIGELEC',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quibusdam assumenda, iure officia reprehenderit doloremque.',

    },
    {
        avatar: '/reviews/avatar_woman.png',
        name: 'Fadoua Bouzbouz',
        job : 'Teacher at ESIGELEC',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quibusdam assumenda, iure officia reprehenderit doloremque.',

    },
    {
        avatar: '/reviews/avatar_man.jpg',
        name: 'Antonia Hounsa',
        job : 'Teacher at ESIGELEC',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quibusdam assumenda, iure officia reprehenderit doloremque.',

    }, 

];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            {/*  slider */}
            <Swiper 
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2},
                    1400: { slidesPerView: 3},
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable: true}}
                className='h-[350px]'
                >
                {reviewData.map((person , index) =>
                {
                    return <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className='flex items-center gap-x-4'>
                                    {/* image avatar*/}
                                    <Image src={person.avatar} width={70} height={70} alt='' priority></Image>
                                    {/*  name */}
                                    <div>
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews