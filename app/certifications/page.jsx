'use client';
import React, { useState } from 'react';
import { Tabs , TabsList , TabsContent , TabsTrigger } from '@/components/ui/tabs';
import CertificationCard from '@/components/CertificationCard';

const certificationData = [
    {
        image: '/certification/az-900.PNG',
        category: 'back-end',
        name:'Microsoft Azure Fundamentals',
    },
    // {
    //   image: '/certification/certificationTest.png',
    //   category: 'AI',
    //   name:'Microsoft AI Fundamentals',
    // },
    {
      image: '/certification/BlazorDonet.PNG',
      category: 'back-end',
      name:'Microsoft Blazor',
    },
    {
        image: '/certification/ReactJs.PNG',
        category: 'front-end',
        name:'ReactJS',
    },
    {
        image: '/certification/apiRestful.PNG',
        category: 'back-end',
        name:'Api Restful',
    },
    {
        image: '/certification/Git.PNG',
        category: 'back-end',
        name:'Git',
    },
    {
        image: '/certification/EFCore.PNG',
        category: 'back-end',
        name:'Entity Framework Core 6',
    },
    {
        image: '/certification/canva.png',
        category: 'front-end',
        name:'Canva',
    },
];


const uniqueCategories = [ 
    'all certifications' , 
    ...new Set(certificationData.map((item) => item.category))];

const Certifications = () => {
    const [categories , setCategories] = useState(uniqueCategories);
    const [category , setCategory] = useState('all certifications');
    const filteredCertifications = certificationData.filter((certification) => {
        //if category is 'all project' return all project else filter by category
        return category === 'all certifications' 
            ? certification
            : certification.category === category; 
    });

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My certifications</h2>
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
                        {filteredCertifications.map((certification , index)=> {
                            return (
                                <TabsContent value={category} key={index}>
                                    <CertificationCard certification={certification}></CertificationCard>
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

export default Certifications;