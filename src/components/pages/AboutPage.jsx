import Card from "../shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is react App</p>

          <p>
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default AboutPage;
