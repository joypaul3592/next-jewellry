import Image from "next/image";
// Images
import aboutHero1 from '/public/assect/image/about/about1.jpg'
import aboutHero4 from '/public/assect/image/about/about2.webp'
import aboutHero2 from '/public/assect/image/about/about3.webp'
import aboutHero3 from '/public/assect/image/about/about4.jpg'
import aboutHero5 from '/public/assect/image/about/about7.jpg'
import aboutHero6 from '/public/assect/image/about/about6.jpg'
import aboutHero8 from '/public/assect/image/about/about8.jpg'
import aboutHero9 from '/public/assect/image/about/about9.jpg'

export default function HomeBannerImgesGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:px-20 md:px-0 px-0 relative">
            <div className="grid gap-4  order-last md:order-none">
                <div className="h-40 max-w-full rounded-lg md:block hidden"></div>
                <div>
                    <Image
                        data-aos="flip-up"
                        src={aboutHero1}
                        alt="aboutHero1"
                        className="h-32 max-w-full rounded-lg"

                    />
                </div>
                <div className="h-40 max-w-full rounded-lg md:block hidden ">
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        data-aos="fade-down"
                        src={aboutHero2}
                        alt="aboutHero1"
                        className="h-36 max-w-full rounded-lg border"
                    />
                </div>
                <div>
                    <Image
                        data-aos="fade-right"
                        src={aboutHero3}
                        alt="aboutHero1"
                        className="h-60 max-w-full rounded-lg"
                    />
                </div>
                <div className="h-24 max-w-full rounded-lg">
                    <Image
                        data-aos="fade-left"
                        src={aboutHero4}
                        alt="aboutHero1"
                        className="h-24 max-w-full rounded-lg border"
                    />
                </div>
            </div>
            <div className="grid gap-4 ">
                <div>
                    <Image
                        data-aos="fade-up-right"
                        src={aboutHero8}
                        alt="aboutHero1"
                        className="h-60 max-w-full rounded-lg"
                    />
                </div>
                <div>
                    <Image
                        data-aos="fade-up-left"
                        src={aboutHero5}
                        alt="aboutHero1"
                        className="h-28 max-w-full rounded-lg"
                    />
                </div>
                <div>
                    <Image
                        data-aos="flip-left"
                        src={aboutHero6}
                        alt="aboutHero1"
                        className="h-36 max-w-full rounded-lg"
                    />
                </div>
            </div>
            <div className="grid gap-4 ">
                <div className="h-48 max-w-full rounded-lg md:block hidden">
                </div>
                <div>
                    <Image
                        data-aos="fade-up"
                        src={aboutHero9}
                        alt="aboutHero1"
                        className="h-52 max-w-full rounded-lg"
                    />
                </div>
                <div className="h-5 max-w-full rounded-lg md:block hidden">
                </div>
            </div>


        </div>
    )
}
