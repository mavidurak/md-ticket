import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

export default function HomePage() {
  console.log("RENDER HomePage");
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout function");
      dispatch(logout());
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <h2 className="test-class">Home Page!</h2>
      <Link to="/about">Go to About</Link>
    </>
  );
}
