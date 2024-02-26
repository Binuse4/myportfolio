'use client';
import React , { useState , useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { saveAs } from 'file-saver';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine

} from 'react-icons/ri';

//components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting]= useState(false);
    const  toRotate = [ "Developper Fullstack" , "Web Designer" , "Web Developper"];
    const [text , setText]= useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText ) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1 );   
            setDelta(500);
        }
    }

    const downloadPdf = () => {
        const pdfUrl = './Page1Rapport.pdf';
        saveAs(pdfUrl, 'Page1Rapport.pdf');
      };
    
    

    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>{`WebCoder `}{text}</div>
                        <h1 className='h1 mb-4'>Hello, I'm is Tanya ADISSIN</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'> 
                            New Era, New Ideas
                            <br/>
                            A recent graduate with a passion for digital design. My journey begins with a curiosity: "How does it work?". Today, I'm transforming that curiosity into innovative web solutions, combining functionality and aesthetics.  
                        </p>
                        {/* button */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 '> 
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact me <Send size={18}/>
                                </Button>
                            </Link>

                            <Button variant='secondary' className='gap-x-2' onClick={downloadPdf}>
                                Download CV
                                <Download size={18}/>
                            </Button>
                        </div>
                        {/* socials ici ça marche pas comme prévu c'est à revoir*/}   
                        <Socials 
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
                            iconsStyles='text-foreground text-[28px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='hidden xl:flex relative'>
                        {/* Badge 1 */}
                        <Badge 
                            containerStyles='absolute top-[24%] right-[24rem] '
                            icon={<RiBriefcase4Fill/>} 
                            endCountNum={2} 
                            badgeText='Years Of Experience'
                        />
                        {/* Badge 2 */}
                        <Badge 
                            containerStyles='absolute top-[80%] right-[20rem] '
                            icon={<RiTodoFill/>} 
                            endCountNum={6} 
                            badgeText='Finished Projects'
                        />
                        {/* Badge  3*/}
                        {/* <Badge 
                            containerStyles='absolute top-[55%] -left-[10rem] '
                            icon={<RiTeamFill/>} 
                            endCountNum={2} 
                            badgeText='Clients'
                        /> */}
                        <div className='bg-hero_shape dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
                            <DevImg 
                                containerStyles='bg-hero_shape1_light w-[510px] h-[462px] bg-no-repeat relative bg-bottom' 
                                imgSrc=''
                            /> 
                            {/* Il faut au niveau de image rajouter une photo de toi */}
                        </div>
                    </div>
                </div>
                {/*  icons */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary '/>
                </div>
            </div>
        </section>
    )

}

export default Hero; 