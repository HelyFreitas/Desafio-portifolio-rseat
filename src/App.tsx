import Perfil from "./assets/perfil.webp";
import "./styles.scss";

import Mapin from "./assets/icons/map-pin.png";
import Mala from "./assets/icons/briefcase.png";
import Github from "./assets/icons/github.png";
import Linkedin from "./assets/icons/linkedin.png";
import Twiter from "./assets/icons/twitter.png";
import Url from "./assets/icons/globe.png";
import Email from "./assets/icons/mail.png";
import { Card } from "./components/Card";
import { CardCollumn } from "./components/CardCollumn";
import { Card2 } from "./components/Card2";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="first-content">
          <img src={Perfil} alt="" />
          <section>
            <h3>João Inácio Neto</h3>
            <p>Full Stack Developer</p>
          </section>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className="second-content">
          <div>
            <img src={Mapin} alt="" />
            <p>Brasil</p>
          </div>
          <div>
            <img src={Mala} alt="" />
            <p>Rocketseat</p>
          </div>
          <div>
            <img src={Github} alt="" />
            <p>birobirobiro</p>
          </div>
          <div>
            <img src={Linkedin} alt="" />
            <p>joao-inacio-neto</p>
          </div>
          <div>
            <img src={Twiter} alt="" />
            <p>birobirobiro</p>
          </div>
          <div>
            <img src={Url} alt="" />
            <p> https://birobirobiro.dev</p>
          </div>
          <div>
            <img src={Email} alt="" />
            <p>birobirobiro.dev@gmail.com</p>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className="third-content">
          <h1>Tecnologias</h1>
          <div className="cards1">
            <Card text="javascript" />
            <Card text="reactjs" />
            <Card text="nodejs" />
          </div>
          <div className="cards2">
            <Card text="git" />
            <Card text="github" />
            <Card text="html" />
          </div>
          <div className="cards3">
            <Card text="css" />
            <Card text="elixir" />
            <Card text="react native" />
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className="bedroom-content">
          <CardCollumn title="Experiências" />
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <div className="bedroom-content">
          <CardCollumn title="Educação" />
        </div>
      </div>

      <div className="tasksbar">
        <div className="myprojects">
          <h1>My Projects</h1>
          <p>veja todos</p>
        </div>

        <div className="my-onix">
          <Card2 />
          <Card2 />
        </div>

        <div className="recent-posts">
          <h1>Recent Posts</h1>
        </div>

        <div className="posts-container">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
