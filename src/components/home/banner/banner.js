import Title from '@/components/shared/title/page'
import ShortHeading from '@/components/shared/shortHeading/page'
import ImageGrids from '@/components/shared/imageGrids/imageGrids'
import RoundedBtnFill from '@/components/shared/roundedBtn/roundedBtnFill'

export default function Banner() {
    return (
        <section className="overflow-hidden pb-12  ">
            <div className="container mx-auto">
                <div className="lg:flex items-center justify-between gap-10 xl:gap-0 ">
                    <div className="w-full pl-4 lg:w-3/5 xl:w-6/12">
                        <ImageGrids />
                    </div>
                    <div className="w-full lg:w-2/5 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <ShortHeading text='Jewellry' />
                            <div className=' font-medium mb-10'>
                                <Title text='Making perfect images of your coloful moment' />
                            </div>
                            <p className="my-5 mb-3  dark:text-gray-300">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sunt similique ut culpa deleniti corrupti ipsum excepturi quod obcaecati quam, vitae, ratione ad quo autem facere, tempora error quia corporis.
                            </p>
                            <p className="mb-8 dark:text-gray-300  ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus a esse laborum incidunt id accusantium possimus ut.
                            </p>
                            <div className=" flex">
                                <RoundedBtnFill text='See more' type='button' href={'/services'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

