import React from 'react';
import Heading from './../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading
                title='Demo title'
                subtitle='demo subtitle'
            ></Heading>

            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
                    alt="header image" />
            </div>
        </>
    );
};

export default Header;