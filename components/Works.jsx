'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/portfolio.PNG',
        category: 'react js',
        name:'My Portfolio',
        description: 'Creation of a personalized online portfolio, highlighting my skills, projects and achievements to present my career path and skills in a professional way to potential employers.',
        link:'/',
        github: 'https://github.com/Binuse4/myportfolio',
    },
    {
      image: '/work/todolist.PNG',
      category: 'react js',
      name:'Todo List App',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo explicabo nesciunt facere dolores velit perferendis delectus non harum dolor quaerat voluptates libero maxime sed. Fugit dolorem soluta praesentium molestias.',
      link:'/',
      github: '/',
    },
    {
      image: '/work/bookExchange.PNG',
      category: 'react js',
      name:'Book Exchange Platform',
      description: 'Development of a book exchange platform enabling users to list and find books for exchange, enhanced by advanced search options and a book rating system.',
      link:'/',
      github: '/',
    },
    {
      image: '/work/quizApp.PNG',
      category: '.Net',
      name:'QuizArena',
      description: 'Development of an interactive quiz application enabling users to test their knowledge through various categories of questions, with a scoring system to evaluate performance.',
      link:'/',
      github: 'https://github.com/Binuse4/quiz-app',
    },
    {
      image: '/work/donutShop.PNG',
      category: '.Net',
      name:'SweetRings',
      description: 'Development of an online ordering platform dedicated to donut lovers, offering a varied selection and the possibility of customizing orders for a unique gourmet experience.',
      link:'/',
      github: '/',
    },
    {
      image: '/work/blogApp.PNG',
      category: '.Net',
      name:'Blog',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo explicabo nesciunt facere dolores velit perferendis delectus non harum dolor quaerat voluptates libero maxime sed. Fugit dolorem soluta praesentium molestias.',
      link:'/',
      github: '/',
    },
    // {
    //   image: '/work/workTest.png',
    //   category: '.Net',
    //   name:'My Portfolio',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo explicabo nesciunt facere dolores velit perferendis delectus non harum dolor quaerat voluptates libero maxime sed. Fugit dolorem soluta praesentium molestias.',
    //   link:'/',
    //   github: '/',
    // },
    // {
    //   image: '/work/workTest.png',
    //   category: 'Java',
    //   name:'My Portfolio',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo explicabo nesciunt facere dolores velit perferendis delectus non harum dolor quaerat voluptates libero maxime sed. Fugit dolorem soluta praesentium molestias.',
    //   link:'/',
    //   github: '/',
    // },
    // {
    //   image: '/work/workTest.png',
    //   category: 'Java',
    //   name:'My Portfolio',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo explicabo nesciunt facere dolores velit perferendis delectus non harum dolor quaerat voluptates libero maxime sed. Fugit dolorem soluta praesentium molestias.',
    //   link:'/',
    //   github: '/',
    // },
];

const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4"> Latest Projects</h2>
          <p className="subtitle mb-8"> Some of my projects  </p>
          <Link href='/projects'><Button>All projects</Button></Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable: true}}>
            {/* show only the first 4 projetcs for the slides */}
            {projectData.slice(0, 4).map((project , index) =>
            {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard className="description-container" project={project}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Works;