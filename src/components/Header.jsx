import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between text-red-700">
      <div>Logo</div>
      <div>
        <Button variant="default">1</Button>
      </div>
    </div>
  );
};

export default Header;
