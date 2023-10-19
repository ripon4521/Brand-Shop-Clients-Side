import { Link } from "react-router-dom";
import { AiFillStar , AiOutlineArrowRight  } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import userImg from "../../assets/Photo.png"


const Navbar = () => {
  const {user , logOut} = useContext(AuthContext);

  

  const handleLogout =()=>{
    logOut()
    .then(result =>{
        console.log(result);
        toast.success("Logout Succesfull")
      
        
    })
    .catch(error => console.log(error.message))
  }


const search = <>


<div className="flex">
<input type="text"  className="border  px-3 py-1 rounded"  placeholder="seacrh "/>
<button className="bg-green-500 px-3 text-white font-bold"><BsSearch></BsSearch></button>
</div>
</>

    const navLink =<>
    <li><Link className="font-roboto   font-semibold hover:text-green-500">Home</Link></li>
    <li><Link to="/addproduct" className="font-roboto  font-semibold hover:text-green-500 ">Add Product</Link></li>
    <li><Link to="/cart" className="font-roboto  font-semibold hover:text-green-500 ">My Cart</Link></li>
    <li><Link to="/profile" className="font-roboto  font-semibold  hover:text-green-500">Profile</Link></li>
    </>
    return (
        <div className="font-roboto">
         <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>
    <a className=" font-ranacho ml-10  normal-case flex items-center font-bold text-3xl"><span className="text-green-500 text-4xl"><AiFillStar></AiFillStar></span> Mobile   <span className="text-green-500 ml-2"> Store</span></a>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>

  <div className=" hidden md:block md:ml-16">
  {search}
  </div>

  <div className="navbar-end md:mr-10">
  {
    user ?
     <div className="flex gap-2">
      <div >
    {
      user ? <img className="w-12 border-4 rounded-full" src={user.photoURL? user.photoURL : userImg} alt="" /> : <img className="w-10 mr-5" src={userImg} alt="" />
    }
  </div>

      <button onClick={handleLogout}>
    <a className="  font-semibold flex items-center justify-center gap-1 bg-green-500 text-white px-2 py-2 rounded">Logout <span><AiOutlineArrowRight></AiOutlineArrowRight></span></a></button>
    
    </div> 
    :
    <div>
    <Link to="/login">
  <a className="  font-semibold flex items-center justify-center gap-1 bg-green-500 text-white px-2 py-2 rounded">Sign In <span><AiOutlineArrowRight></AiOutlineArrowRight></span></a></Link>
    </div>
  }

  </div>
  <ToastContainer></ToastContainer>
</div>
        </div>
    );
};

export default Navbar;