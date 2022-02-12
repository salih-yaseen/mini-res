import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoBag } from "react-icons/io5";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <>
      
        <div className="bg-emerald-500	py-6">
          <div className="flex flex-row justify-center align-middle">
            <Link to="/" className="mx-8 text-lg">Home</Link>
            <Link to="/cart" className="mx-4 flex text-lg relative">
              <IoBag className="text-3xl"/>
              {quantity !== 0 && <span className="text-sm absolute top-1 right-0 rounded-full px-1 py-[-10px] bg-cyan-100 ">{quantity}</span>}
            </Link>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
