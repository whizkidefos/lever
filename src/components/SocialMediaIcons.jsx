const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center my-10 md:justify-start gap-7">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com/in/anita-lever-bb35a1209/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.facebook.com/lever.anita"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      {/* <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a> */}
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.behance.net/anitalever"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="behance-link" src="../assets/behance.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;