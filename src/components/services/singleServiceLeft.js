import Image from "next/image";

// Components
import Title from "../shared/title/page";
import FeatureItem from "../shared/featureItem/page";

// Images Import
import serviceImg from '/public/assect/image/serviceImg/singleService.jpg'

export default function SingleServiceLeft() {
    return (
        <div className=" lg:w-2/3 mb-10 lg:mb-0 ">
            <Image src={serviceImg} alt="serviceImg" className=" w-full 2xl:h-[35rem] rounded-2xl mb-5" />
            <Title text='Making Business Sense of your coloful moment' />
            <p className=" mt-7 mb-10 text-gray-600 dark:text-gray-300 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <h1 className=" text-lg font-medium mb-3">Service Features</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
            <div className=" grid xl:grid-cols-2 gap-5">
                <FeatureItem text='Accelerate innovation.' />
                <FeatureItem text='Accelerate innovation.' />
                <FeatureItem text='With world-class tech teams.' />
                <FeatureItem text='With world-class tech teams.' />
                <FeatureItem text='Our all service offerings to enhance.' />
                <FeatureItem text='Our all service offerings to enhance.' />
            </div>
        </div>
    )
}
