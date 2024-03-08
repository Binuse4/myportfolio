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
        text: 'binuse.adissin@groupe-esigelec.org',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 16 Sep, 2001', 
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Engineering Degree', 
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Rouen France', 
    },
]
const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'CSNDA',
                qualification: 'Bachelor of Science',
                years: '2019'
            },
            {
                university: 'Prépa',
                qualification: 'MPSI',
                years: '2019 - 2021'
            },
            {
                university: 'ESIGELEC',
                qualification: 'Engineering Degree ',
                years: '2021 - 2024'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'SQLI Digital Experience',
                role: 'Design Engineer Developer.Net',
                years: '2022 - Present',
                location: 'Rouen/France'
            },
            {
                company: 'SQLI Digital Experience',
                role: 'DevOps Intern',
                years: '2023 - 3 months',
                location: 'Barcelone/Spain'
            },
            {
                company: 'Treasury and Public Accounting Department',
                role: 'Assistant in Research and Development Department',
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
                name: 'C#, .Net, Python',
            },
            {
                name: 'Java, Spring Boot',
            },
            {
                name: 'JavaScript, React.js',
            },
            {
                name: 'Agile Methods, Cycle V',
            },
            {
                name: 'Git, CI/CD, Clean Code, TDD, Refactoring ',
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
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'> 
                    About me
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/image6.PNG'/>
                        {/* photo de moi */}
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>My Info</h3>
                                        {/* <p className='subtitle max-w-xl max-auto xl:mx-0'> </p> */}
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
                                        {/* language */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className='border-b border-border'></div>
                                            <div>English , French</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 md-4 text-center xl:text-left'>My Awesome Journey</h3>
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase/>
                                                    <h4 className='capitalize font-meduim '>
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-3'>
                                                    {/* le ?permet d'appeler data quand il est pas undefined */}
                                                    {getData(qualificationData, 'experience').data?.map(
                                                        (item, index) => {
                                                            const { company , role , years , location} = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div className='h-[84px] w-[1px] bd-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                        <div className='text-base font-medium'>{years}</div>
                                                                        <div className='text-base font-small'>{location}</div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28}/>
                                                    <h4 className='capitalize font-meduim '>
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {/* le ?permet d'appeler data quand il est pas undefined */}
                                                    {getData(qualificationData, 'education').data?.map(
                                                        (item, index) => {
                                                            const { university , qualification , years } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div className='h-[84px] w-[1px] bd-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                        <div className='text-base font-medium'>{years}</div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills ( a remplacer par certifications possiblement) */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>What I use Everyday</h3>
                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(skillData , 'skills').data?.map((item,index)=> {
                                                    const {name} = item;
                                                    return (
                                                        <div className='w-2/4 text-center xl:text-left mx:auto' key={index}>
                                                            <div className='font-medium'>{name}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {getData(skillData, 'tools').data?.map((item,index)=> {
                                                    const {imgPath} = item;
                                                    return (
                                                        <div className='' key={index}>
                                                            <Image src={imgPath} width={48} height={48} alt='' priority/>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About; 