import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return <div>
        <div className='flex gap-2'>
            <Image src="/BIXBY.png" alt="logo" width={100} height={100} />
            <div>
                <h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200'> <LayoutGrid className='h-5 w-5'/> Category</h2>
            </div>
        </div>
    </div>
}
export default Header;