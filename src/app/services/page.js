'use client'
// Components
import SectionHeader from "@/components/shared/sectionHeader/page";
import ServiceCard from "@/components/shared/card/serviceCard";

// json data of services
import services from '/public/assect/json/services.json'

export default function Service() {
    return (
        <>
            <SectionHeader lable='Our Services' title='Our Awesome Services' shotDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
            <div className=" grid xl:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-5 2xl:px-20 xl:px-0 lg:px-10 md:px-0 sm:px-10 ">
                {services?.map(service => <ServiceCard service={service} key={service?.id} />)}
            </div>
        </>
    )
}
