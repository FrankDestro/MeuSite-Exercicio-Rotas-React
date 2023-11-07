import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

import "./styles.css";

export default function Subscription() {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="title-subscription">
              <h1 className="teste">Faça sua inscrição!</h1>
            </div>
            <div className=" mt30 mb30">
              <Card title="Página de inscrição" />
            </div>
            <div className="dflex">
              <Link to="/promotion">
                <Button text="Ver promoção" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
