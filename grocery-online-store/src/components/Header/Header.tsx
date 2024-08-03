import { LayoutGrid, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return <div className='p-5 shadow-md'>
        <div className='flex gap-8 items-center px-5'>
            <Image src="/BIXBY.png" alt="logo" width={100} height={100} />
                <h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-gray-100 border-black '> <LayoutGrid className='h-5 w-5'/> Category</h2>
                <div  className='md:flex gap-3 items-center border rounded-full p-2 px-5
                hidden'>
                    <Search/>
                    <input type='text' placeholder='Search' className='outline-none'/>
                </div>
        </div>
    </div>
}
export default Header;