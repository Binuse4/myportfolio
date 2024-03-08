'use client';
import React, { useState } from 'react';
import { Tabs , TabsList , TabsContent , TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';


const projectData = [
  {
      image: '/work/portfolio.PNG',
      category: 'react js',
      name:'My Portfolio',
      description: 'Creation of a personalized online portfolio, highlighting my skills, projects and achievements to present my career path and skills in a professional way to potential employers.',
      link:'/',
      github: '/',
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
    github: '/',
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
const uniqueCategories = [ 
    'all projects' , 
    ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
    const [categories , setCategories] = useState(uniqueCategories);
    const [category , setCategory] = useState('all projects');
    const filteredProjects = projectData.filter((project) => {
        //if category is 'all project' return all project else filter by category
        return category === 'all projects' 
            ? project 
            : project.category === category; 
    });

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My projects</h2>
                {/* tab */}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
                    mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category , index)=>
                        {
                            return ( 
                                <TabsTrigger 
                                    onClick={()=> setCategory(category)}
                                    value={category} 
                                    key={index} 
                                    className='capitalize w-[162px] md:w-auto'>
                                        {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {/*  tab content */}
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {filteredProjects.map((project , index)=> {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project}></ProjectCard>
                                </TabsContent>
                            );
                        }
                        )}
                    </div>
                </Tabs>
            </div>
        </section>
    )

}

export default Projects;