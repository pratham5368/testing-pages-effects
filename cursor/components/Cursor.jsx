import React, { useEffect } from 'react';
import {gsap} from 'gsap';



const Cursor = () => {

    useEffect(() => {
        const cursor = document.getElementById('#custom-cursor');
        const links = document.querySelectorAll('a');
        const cursorText = document.querySelector('#custom-text');
        
        const onMouseMove = (event)=>{
            const {clientX,clientY} = event;
            gsap.to(cursor,{x:clientX,y:clientY})
        }

        
        const onMouseEnterLink = (event)=>{
            const link = event.target;
            if(link.classList.contains('view')){
                gsap.to(cursor,{scale:4})
                cursorText.style.display = 'block'
            }else{
                gsap.to(cursor,{scale:4})
            }
        }

        const onMouseLeaveLink = ()=>{
            gsap.to(cursor,{scale:1})
            cursorText.style.display = 'none'
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link)=>{
            link.addEventListener('mouseenter',onMouseEnterLink)
            link.addEventListener('mouseleave',onMouseLeaveLink)

        })


        {/*document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            cursor.style.transform = `translate(${x}px, ${y}px)`;*/}
    });
  return (
    <div id='custom-cursor' className='fixed top-0 left-0 w-10 h-10 rounded-full bg-white shadow-lg z-50 p-16 mix-blend-difference pointer-events-none flex justify-center items-center'>
        <span className='text-xs font-black hover:text-slate-950 ' id='custom-text'>View</span>
    </div>
  )
}

export default Cursor;