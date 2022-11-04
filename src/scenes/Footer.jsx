import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 pt-10 bg-red">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="justify-center text-center md:flex md:justify-between ">
          <p className="text-2xl font-semibold font-playfair text-yellow">
            ANITA LEVER
          </p>
          <p className="font-playfair text-md text-yellow">
            © Copyright { new Date().getFullYear() } | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;