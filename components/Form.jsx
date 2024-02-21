'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User , MailIcon,  ArrowRightIcon , MessageSquare } from 'lucide-react';

const Form = () => {
  
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (

    <div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">
          Email sent successfully!
        </p>
      ) : (
              <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
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
              )}
     </div>
  )
}

export default Form; 