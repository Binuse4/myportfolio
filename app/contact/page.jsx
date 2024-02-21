import { MailIcon , HomeIcon , PhoneCall } from 'lucide-react';
import Form from '@/components/Form';

const Contact = () => {
    return (
        <section>
            <div className='container mx-auto'>
                {/*  text & illustration */}
                <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
                    {/* text */}
                    <div className='felx flex-col justify-center'>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            Say Hello 
                        </div>
                        <h1 className='h1 max-w-md mb-8'> Let's work together</h1>
                        <p className='subtitle max-w-[400px]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ipsa minima vero, molestiae harum qui.
                        </p>
                    </div>
                    {/* illustration */}
                    <div className='hidden xl:flex w-full bg-contact_bg_light dark:bg-contact_bg_dark 
                    bg-contain bg-top bg-no-repeat'></div>
                </div>
                {/* info text et form */}
                <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
                    {/* info text */}
                    <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base
                    xl:text-lg'>
                        {/* mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon size={18} className='text-primary'/>
                            <div><a href='mailto:binuse.adissin@yahoo.com'>binuse.adissin@yahoo.com</a></div>
                        </div>
                        {/* mail */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon size={18} className='text-primary'/>
                            <div> 124 C Rue Louis Blanc 76100 Rouen France</div>
                        </div>
                        {/* mail */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall size={18} className='text-primary'/>
                            <div> +33 7 53 78 35 57</div>
                        </div>
                    </div>
                   <Form/>
                </div>
            </div>
        </section>
    )

}

export default Contact;