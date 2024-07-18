import NextBreadcrumb from '@/components/NextBreadcrumb'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='text-amber-500'
                containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
                isNotFound={true}
            />
            
            <div className='flex flex-col'>
                <p className='text-[110px] text-center mt-10'>404 Not Found</p>
                <p className='text-center'>Your visited page not found. You may go home page.</p>
                <Link href="/" className='pt-4 pb-4 pl-12 px-12 bg-[#DB4444] rounded text-base text-white ml-auto mr-auto  mt-20'>Back to home page</Link>
            </div>
        </>
    )
}
