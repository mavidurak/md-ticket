import { Link } from "react-router-dom";

export default function HomePage() {
  console.log("RENDER HomePage");
  return (
    <>
      <h2 className="test-class">Home Page!</h2>
      <Link to="/about">Go to About</Link>
    </>
  );
}
