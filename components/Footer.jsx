import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className='bg-secondary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between'>
                    {/* <Socials
                        containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
                        iconStyles='text-primary text-white/70 text-[28px] hover:text-white dark:hover:text-primary transition-all'
                    /> */}
                    <Socials 
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' 
                            iconsStyles='text-primary text-[28px] hover:text-white transition-all'
                        />
                    {/* copyright */}
                    <div className='text-muted-foreground'>
                        Copyright &copy; Tanya Adissin. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer; 