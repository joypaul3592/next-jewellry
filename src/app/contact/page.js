import ContactFrom from "@/components/contact/contactFrom";
import ContactInfo from "@/components/contact/contactInfo";
import SectionHeader from "@/components/shared/sectionHeader/page";

export default function Contact() {
  return (
    <>
      <SectionHeader lable='Contact us' title='Get in touch, With Us' shotDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      <ContactInfo />
      <ContactFrom />
    </>
  );
}
// We’d love to hear from you