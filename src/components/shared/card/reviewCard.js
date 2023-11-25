'use client'
import Image from 'next/image'

// image
import quotation from '/public/assect/image/quotationWhite.svg'
import quotation2 from '/public/assect/image/quotationBlack.svg'
import Avator from '/public/assect/image/avator.png'
import { useSelector } from 'react-redux'


export default function ReviewCard() {
    const { theme } = useSelector((state) => state.theme);
    return (
        <section className=" w-full  flex justify-center   ">
            <div className=" xl:w-8/12 lg:w-10/12 w-full flex flex-col items-center text-center">
                <Image src={theme === "dark" ? quotation2 : quotation} alt='this is quotation' className=' sm:h-20 h-16' />
                <p className=" sm:text-2xl text-xl text-gray-900 dark:text-white my-2">&quot; Notex is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. &quot;</p>
                <div className="flex items-center gap-4 mt-5">
                    <Image src={Avator} alt='Avator' className=' h-12 w-12 bg-white rounded-full' />
                    <div className=' flex flex-col items-start'>
                        <div className="font-medium text-[#748E63] dark:text-[#F9B572]">Micheal Gough</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
