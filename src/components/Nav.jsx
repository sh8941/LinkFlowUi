import React from 'react';

const Nav = () => {
    return (
        <div className='w-full px-6 py-4 bg-black text-white flex justify-between items-center'>
            {/* logo */}
            <div className='text-4xl font-bold'>
                LinkFlow
            </div>

            {/* center */}
            {/* <div className='flex gap-6 text-2xl'>
                <a href="#">My_Urls</a>
                <a href="#">Analytics</a>
                <a href="#">Tools</a>
                <a href="#">Pricing</a>
            </div> */}

            {/* account section */}
            <div className='flex gap-4 justify-between items-center'>
                <p className=''><i className="ri-contrast-2-fill  text-4xl"></i></p>
                <div className='relative group'>
                    <p className='h-8 w-8 text-center rounded-full bg-violet-400 text-violet-800 font-bold text-2xl'>S</p>
                     {/* opacity-0 
                     invisible  for below container */}
                {/* <div className="absolute 
                right-0 
                group-hover:opacity-100 
                group-hover:visible 
                h-40 
                w-40 
                bg-gray-100 
                ">
                    Profile Card
                </div> */}
                
                </div>

            </div>
        </div>
    );
}

export default Nav;
