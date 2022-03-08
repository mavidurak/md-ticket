import Button from "./Button";
import RedButton from "./Button/RedButton";

function App() {
  const handleClick = () => {
    console.log("Butona tıklandı!");
  };

  return (
    <div>
      <Button onClick={handleClick}>Default Button</Button>
      <RedButton onClick={handleClick}>RedButton</RedButton>
    </div>
  );
}

export default App;
