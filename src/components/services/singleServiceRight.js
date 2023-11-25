// icons import
import { GoServer } from "react-icons/go";
import { TbCurrencyDollar } from "react-icons/tb";

// Components
import Social from "../shared/social/page";
import ServiceCat from "../shared/serviceCat/page";
import RoundedBtnFill from "../shared/roundedBtn/roundedBtnFill";

export default function SingleServiceRight() {
    return (
        <div className="lg:w-1/3">
            <div className="  bg-gray-50 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e]   rounded-xl p-5 h-fit mb-10 flex justify-between items-center ">
                <div className="text-xl flex items-center ">
                    <TbCurrencyDollar className="text-[#748E63] dark:text-[#F9B572]" />
                    <h1 className=" text-3xl font-medium dark:text-white">450</h1>
                </div>
                <RoundedBtnFill text='Visit now' type='button' href={'/'} />
            </div>
            <div className="   bg-gray-50 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e]   rounded-xl p-5 py-7 h-fit">

                <div className=" flex items-start gap-3 text-lg ">
                    <GoServer className="text-[#748E63] dark:text-[#F9B572] mt-1" />
                    <p className=" text-lg font-medium  dark:text-white">Services Categories :</p>
                </div>

                <div className="my-5 flex flex-col gap-2  dark:text-gray-300">
                    <ServiceCat text='web development' />
                    <ServiceCat text='Frontend development' />
                    <ServiceCat text='Backend development' />
                    <ServiceCat text='Full Stack development' />
                    <ServiceCat text='web development' />
                    <ServiceCat text='Frontend development' />
                    <ServiceCat text='Backend development' />
                    <ServiceCat text='Full Stack development' />
                </div>

                <div className="z-[1]  bg-gradient-to-r from-white dark:from-black via-[#748E63] dark:via-[#F9B572] to-white dark:to-black mb-7 mt-3 h-[0.5px]">
                    <div className=" h-[0.5px] w-full dark:bg-gray-300 bg-gray-400  z-[-1] relative"></div>
                </div>

                <Social />
            </div>
        </div>
    )
}
