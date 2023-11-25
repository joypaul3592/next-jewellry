import BlogsContainer from "@/components/blog/blogsContainer";
import SectionHeader from "@/components/shared/sectionHeader/page";
export default function Blog() {
  return (
    <>
      <SectionHeader lable='Our Articles' title='Our Awesome Articles for you' shotDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      <BlogsContainer />
    </>
  );
}
