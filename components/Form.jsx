'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MessageCircle , AtSign,  ArrowRightIcon , MessageSquare } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //confirm email and message field are not empty
    if (!formData.email || !formData.message) {
      toast.info("Email and message are required fields");
      return;
    }
    
    try {

      setIsSending(true);
      const response = await fetch("/api/send", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      // handle success
      if (response.ok) {
        toast.success("Email Sent Successfully!");
        setIsSending(true);
        setFormData({
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      toast.error("There was a problem sending email. Pls try again!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    
    <div>
      
        <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                  {/* input */}
                  <div className='relative flex items-center'>
                      <Input name='subject' type='name' placeholder='Subject' value={formData.subject} onChange={handleChange}/>
                      <MessageCircle className='absolute right-6'/>
                  </div>
                  {/* input */}
                  <div className='relative flex items-center'>
                      <Input name='email' type='email' placeholder='Your mail' value={formData.email} onChange={handleChange}/>
                      <AtSign className='absolute right-6'/>
                  </div>
                  {/* input */}
                  <div className='relative flex items-center'>
                      <Textarea name='message'placeholder='Your message' value={formData.message} onChange={handleChange}/>
                      <MessageSquare className='absolute top-4 right-6'/>
                  </div>
                  <Button className='flex items-center gap-x-1 max-w-[166px]' type="submit">
                  {isSending} &nbsp;Send
                      <ArrowRightIcon size={20}/>
                  </Button>
              </form>
              <ToastContainer />  
     </div>
     
  )
}

export default Form; 