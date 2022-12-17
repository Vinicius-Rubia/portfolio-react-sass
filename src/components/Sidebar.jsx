import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/profile.jpeg";
import InformationContainer from "./InformationContainer";
import Curriculo from "../archive/curriculo.pdf"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vinicius Rubia" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={Curriculo} download="curriculo" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
