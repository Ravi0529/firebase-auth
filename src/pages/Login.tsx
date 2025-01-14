import { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const Login: React.FC = () => {

    const firebase = useFirebase();
    // console.log(firebase);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await firebase?.signinUserWithEmailAndPassword(email, password);
    }

    const navigate = useNavigate();

    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-200">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="mt-2 w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                className="mt-2 w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex space-x-4 mb-6">
                            <button
                                type="button"
                                className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 shadow-lg"
                            >
                                Signup with <FaGoogle className="ml-2 text-xl" />
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 shadow-lg"
                            >
                                Signup with <FaGithub className="ml-2 text-xl" />
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold shadow-md"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <span
                            onClick={() => navigate("/signup")}
                            className="text-indigo-600 hover:underline font-medium cursor-pointer"
                        >
                            Register here
                        </span>
                    </p>
                </div>
            </div>
        );
}

export default Login;
