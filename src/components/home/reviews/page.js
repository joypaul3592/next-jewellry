"use client";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components

import SectionHeader from "@/components/shared/sectionHeader/page";
import ReviewCard from "@/components/shared/card/reviewCard";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";

const reviewData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Reviews() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className=" px-4 sm:px-10 mt-20 ">
            <SectionHeader lable='Testimonials' title='Our Customer Say About Us' shotDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
            <div className="review__slider ">
                <Slider {...settings}>
                    {reviewData.map(data => <ReviewCard key={data} />)}
                </Slider>
            </div>
        </div>
    );
};
