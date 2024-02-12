import  DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent , TabsList, TabsTrigger } from '@/components/ui/tabs';

import { User2 , MailIcon , HomeIcon ,PhoneCall , GraduationCap , Calendar , Briefcase } from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Tanya ADISSIN', 
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+33 7 53 78 35 53',  
    },
    {
        icon: <MailIcon size={20} />,
        text: 'binuse.adissin@yahoo.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 16 Sep, 2001', 
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master on Computer Science', 
    },
    {
        icon: <HomeIcon size={20} />,
        text: '124 C Rue Louis Blanc, 76100 , Rouen France', 
    },
]

const qualificationData = [
    {
        title: 'education',
        date: [
            {
                university: 'CSNDA',
                qualification: 'Bachelor of Science',
                years: '2019'
            },
            {
                university: 'Prépa',
                qualification: 'Bachelor of Science',
                years: '2019 - 2021'
            },
            {
                university: 'ESIGELEC',
                qualification: 'Master on Computer Science',
                years: '2021 - 2024'
            },
        ]
    },
    {
        title: 'experience',
        date: [
            {
                company: 'SQLI Digital Experience',
                qualification: 'Design Dngineer and .Net Full Stack Developer',
                years: '2022 - Present',
                location: 'Rouen/France'
            },
            {
                company: 'SQLI Digital Experience',
                qualification: 'DevOps Intern',
                years: '2023 - 3 months',
                location: 'Barcelone/Spain'
            },
            {
                company: 'Treasury and Public Accounting Department',
                qualification: 'Assistant to the Deputy Head of the Research and Development Department',
                years: '2020 - 1 month',
                location: 'Cotonou/Benin'
            },
        ]
    }
]; 
const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'HTML, CSS',
            },
            {
                name: 'HTML, CSS',
            },
            {
                name: 'HTML, CSS',
            },
        ]

    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.png',
            },
            {
                imgPath: '/about/vscode.png',
            },
            {
                imgPath: '/about/vscode.png',
            },
            {
                imgPath: '/about/vscode.png',
            },
            {
                imgPath: '/about/vscode.png',
            },
            
        ]

    }
];

const About = () => {
    const getData = (arr , title) => {
        return arr.find((item) => item.title === title)
    }
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title md-8 xl:md-16 text-center mx-auto'> 
                    About me
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc=''/>
                        {/* photo de moi */}
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info
                                </TabsTrigger>
                                <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 md-4'>Intern</h3>
                                        <p className='subtitle max-w-xl max-auto xl:mx-0'>Info texte rédaction élément oui ou oui </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index)=> {
                                            return (
                                                <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            );
                                        })} 
                                        </div>
                                        {/* langage */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className='border-b border-border'></div>
                                            <div>Ensglish , French</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>Personal info</TabsContent>
                                <TabsContent value='skills'>Personal info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About; 