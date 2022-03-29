import { Link } from "react-router-dom";

export default function AboutPage() {
  console.log("RENDER About");
  return (
    <>
      <h2>About Page!</h2>
      <Link to="/">Go to Home</Link>
    </>
  );
}
