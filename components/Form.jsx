'use client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User , MailIcon,  ArrowRightIcon , MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type='name' placeholder='Name'/>
            <User className='absolute right-6'/>
        </div>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type='email' placeholder='Email'/>
            <MailIcon className='absolute right-6'/>
        </div>
        {/* input */}
        <div className='relative flex items-center'>
            <Textarea type='text' placeholder='Message'/>
            <MessageSquare className='absolute top-4 right-6'/>
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>
            Send
            <ArrowRightIcon size={20}/>
        </Button>
    </form>
  )
}

export default Form