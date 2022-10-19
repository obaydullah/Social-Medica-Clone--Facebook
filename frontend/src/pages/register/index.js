import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [gender, setGender] = useState("");

  const [bYear, setBYear] = useState();
  const [bMonth, setBMonth] = useState();
  const [bDate, setBDate] = useState();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [passShow, setPassShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8000/register", {
        first_name: firstName,
        last_name: lastName,
        username: lastName,
        email: email,
        password: password,
        bYear: bYear,
        bMonth: bMonth,
        bDay: bDate,
        gender: gender,
      });
      setSuccess("Account Created successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setGender("Male");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const years = Array.from(new Array(70), (value, index) => {
    return year - index;
  });
  const months = Array.from(new Array(12), (value, index) => {
    return index + 1;
  });

  const dates = Array.from(new Array(31), (value, index) => {
    return index + 1;
  });

  const handlePassShow = () => {
    setPassShow((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="bg-[#F0F2F5] h-full">
      <div className="max-w-container mx-auto flex flex-wrap justify-between sml:flex-nowrap">
        <div className="flex flex-col justify-center sm:w-[100%] sml:w-[50%]">
          <img src="./fb.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            cumque.
          </p>
        </div>
        <div className="bg-white mt-5 sm:w-[100%] sml:w-[50%]">
          <form className="flex flex-col p-4" onSubmit={handleLogin}>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Type your First Name"
              className="border border-solid border-[#F0F2F5] focus:outline-none text-lg px-4 py-2 rounded"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Type your Last Name"
              className="border border-solid border-[#F0F2F5] focus:outline-none text-lg px-4 py-2 rounded mt-2"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              className="border border-solid border-[#F0F2F5] focus:outline-none text-lg px-4 py-2 rounded mt-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="relative">
              <input
                type={passShow ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Type your Password"
                className="border border-solid border-[#F0F2F5] focus:outline-none text-lg px-4 py-2 rounded mt-2 w-full"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {passShow ? (
                <AiFillEye
                  className="absolute top-5 right-3 text-lg"
                  onClick={handlePassShow}
                />
              ) : (
                <BsFillEyeSlashFill
                  className="absolute top-5 right-3 text-lg"
                  onClick={handlePassShow}
                />
              )}
            </div>
            <p className="text-left mt-2">Date of Birth</p>
            {/* Date of Birth */}
            <div className="flex justify-between">
              <select
                id="Years"
                className="w-[133px] border border-solid border-[#F0F2F5] p-2"
                onClick={(e) => setBYear(e.target.value)}
              >
                {years.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                id="cars"
                className="w-[133px]"
                onClick={(e) => setBMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <option value={month} key={index}>
                    {month === 1 && "January"}
                    {month === 2 && "February"}
                    {month === 3 && "March"}
                    {month === 4 && "April"}
                    {month === 5 && "May"}
                    {month === 6 && "June"}
                    {month === 7 && "July"}
                    {month === 8 && "August"}
                    {month === 9 && "September"}
                    {month === 10 && "October"}
                    {month === 11 && "November"}
                    {month === 12 && "December"}
                  </option>
                ))}
              </select>
              <select
                id="cars"
                className="w-[133px]"
                onClick={(e) => setBDate(e.target.value)}
              >
                {dates.map((date, index) => (
                  <option value={date} key={index}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Gender Start  */}
            <p className="text-left mt-2">Gender</p>
            <div className="flex justify-between mt-2">
              <div>
                <label className="mr-2" htmlFor="male">
                  Male
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={() => setGender("Male")}
                />
              </div>
              <div>
                <label className="mr-2" htmlFor="female">
                  Female
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={() => setGender("Female")}
                />
              </div>
              <div>
                <label className="mr-2" htmlFor="custom">
                  Custom
                </label>
                <input
                  type="radio"
                  id="custom"
                  name="gender"
                  value="custom"
                  onChange={() => setGender("Custom")}
                />
              </div>
            </div>

            <hr className="my-4" />

            {error && <p className="bg-red-500 text-white p-2 my-2">{error}</p>}
            {success && (
              <p className="bg-green-700 text-white p-2 my-2">{success}</p>
            )}

            <button
              type="submit"
              className="bg-green-700 text-white px-8 rounded py-2 self-center"
              onClick={handleLogin}
            >
              Create new
            </button>

            <Link to="/login" className="text-amber-600 my-4">
              Already have an account ? back to Login{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
