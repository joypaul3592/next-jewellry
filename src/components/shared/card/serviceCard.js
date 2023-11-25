'use client'
import RoundedBtn from '../roundedBtn/page'
import CompareSlider from '../compareSlider/page'

export default function ServiceCard({ service }) {
    const { id, title, description, images } = service

    return (
        <div className=' bg-none dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl ' >
            <CompareSlider before={images[0]?.beforeImg} after={images[0]?.afterImg} />
            <div className=' p-3 pb-5 '>
                <h1 className=' text-xl font-medium mb-3 text-[#748E63] dark:text-[#F9B572]'>{title}</h1>
                <p className=' mb-5 text-gray-600 dark:text-gray-300'>{description?.slice(0, 200)}...</p>
                <div className='flex items-center justify-center'>
                    <RoundedBtn text='View Details' type='button' href={`services/${id}`} />
                </div>
            </div>
        </div>
    )
}
