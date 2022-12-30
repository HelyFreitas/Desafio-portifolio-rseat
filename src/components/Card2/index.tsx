import "./styles.scss";

import Folder from "../../assets/icons/folder.png";
import Star from "../../assets/icons/star.png";
import Git from "../../assets/icons/git-branch.png";

export const Card2 = () => {
  return (
    <div className="container-card2">
      <header>
        <img src={Folder} alt="" />
        <h1>my-onix</h1>
      </header>
      <main>
        <p>
          Consulte os códigos de erro que aparecem no painel do veículo Onix.
        </p>
      </main>
      <footer>
        <div>
          <section>
            <img src={Star} alt="" />
            100
          </section>
          <section>
            <img src={Git} alt="" />
            100
          </section>
        </div>
        <section className="section">
          <span></span>
          <p>JavaScript</p>
        </section>
      </footer>
    </div>
  );
};
