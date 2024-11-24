import { House, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      {/* <ShoppingBag className="w-8 h-8" /> */}
      <House className="w-8 h-8" />
    </Link>
  );
}

export default Logo;
