import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const skillData = [
  {
      title: 'tools',
      data: [
          {
            imgPath: '/about/css.png',
          },
          {
            imgPath: '/about/html.png',
          },
          {
            imgPath: '/about/js.png',
          },
          {
            imgPath: '/about/react.png',
          },
          {
            imgPath: '/about/csharp.png',
          },
          {
            imgPath: '/about/dotnet.png',
          },
          {
            imgPath: '/about/java.png',
          },
          {
            imgPath: '/about/spring_boot.png',
          },
          {
            imgPath: '/about/scrum.png',
          },
          {
            imgPath: '/about/sql.png',
          },
          {
            imgPath: '/about/git.png',
          },
          {
            imgPath: '/about/vscode.png',
          },
          
      ]

  }
];

const SkillsSlider = () => {
  const getData = (arr , title) => {
    return arr.find((item) => item.title === title)
}
  return (
    <div>
        <Marquee direction="right" speed={100} delay={5}>
         <div className='image_wrapper'>
              {getData(skillData, 'tools').data?.map((item,index)=> {
                  const {imgPath} = item;
                  return (
                      <div className='' key={index}>
                          <Image src={imgPath} width={150} height={100} alt='' priority/>
                      </div>
                  );
              })}
          </div>
        </Marquee>
      </div>
  )
}

export default SkillsSlider;