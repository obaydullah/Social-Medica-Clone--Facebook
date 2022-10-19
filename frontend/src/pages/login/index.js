import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#F0F2F5] h-screen">
      <div className="max-w-container mx-auto flex flex-wrap justify-between sml:flex-nowrap">
        <div className="flex flex-col justify-center sm:w-[100%] sml:w-[50%]">
          <img src="./fb.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            cumque.
          </p>
        </div>
        <div className=" bg-white mt-5 sm:w-[100%] sml:w-[50%]">
          <form className="flex flex-col p-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              className="border border-solid border-[#F0F2F5] focus:outline-none text-lg px-4 py-2 rounded mt-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your Password"
              className="border border-solid border-[#F0F2F5] focus:outline-none text-lg px-4 py-2 rounded mt-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <hr className="my-4" />
            <button
              type="submit"
              className="bg-green-700 text-white px-8 rounded py-2 self-center"
              onClick={handleLogin}
            >
              Login
            </button>

            <Link to="/register" className="text-amber-600 my-4">
              Not have an account ? Register an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
