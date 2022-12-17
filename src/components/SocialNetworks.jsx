import { FaLinkedinIn, FaGithub, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", link: "https://www.linkedin.com/in/vinicius-rubia-149ab0213/", icon: <FaLinkedinIn /> },
  { name: "github", link: "https://github.com/Vinicius-Rubia", icon: <FaGithub /> },
  { name: "instagram", link: "https://www.instagram.com/vinicius_rubia/", icon: <FaInstagram /> },
  { name: "youtube", link: "https://www.youtube.com/@PutCode", icon: <FaYoutube /> },
  { name: "whatsapp", link: "https://wa.me/5511910412912?text=Ol%C3%A1!!", icon: <FaWhatsapp /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
