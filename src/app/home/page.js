import Reviews from "@/components/home/reviews/page";
import Blog from "../blog/page";
import Service from "../services/page";
import Banner from "@/components/home/banner/banner";



export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Reviews />
      <Blog />
    </>

  )
}
