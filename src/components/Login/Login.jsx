
import { useContext } from 'react';
import { AiFillStar   } from 'react-icons/ai';
import { AuthContext } from '../Auth/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const {login}= useContext(AuthContext)
  const handleGoogleLogin =()=>{
    login()
    .then(result =>{
        console.log(result);
    })
    .catch(error => console.log(error.message))
  }

    return (
        <div className="mt-32">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md ">
    <div className="flex justify-center items-center ">
    <a className=" font-ranacho   normal-case flex items-center font-bold text-3xl"><span className="text-green-500 text-4xl"><AiFillStar></AiFillStar></span> Mobile   <span className="text-green-500 ml-2"> Store</span></a>
    </div>

    <form className="mt-6">
        <div>
            <label name="username" className="block font-roboto text-green-500  ">Username</label>
            <input type="text" className="block w-full px-4 py-2 mt-2   border rounded-lg   focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label name="password" className="block font-roboto text-green-500  ">Password</label>
                <a href="#" className="font-roboto text-xs text-green-500 hover:underline">Forget Password?</a>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 border rounded-lg  focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>
    </form>

    <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a href="#" className="text-xs text-centerfont-roboto text-green-500 hover:underline">
            or login with Social Media
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>

    <div className="flex items-center mt-6 -mx-2">
        <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>

      
    </div>

    <p className="mt-8 text-xs font-light text-center "> Dont have an account? <Link to="/signup" className="font-medium text-green-500 hover:underline">Create One</Link></p>
</div>
        </div>
    );
};

export default Login;