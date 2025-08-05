import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {showTost} from "../utils"
export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleNext = () => {
   if(form.username && form.password){
    showTost( `Welcome ${form.username}` , "linear-gradient(to right, #00b09b, #96c93d)" , "success")
   }
   else if (!form.password)
    showTost( `Please Enter Your UserName` , "red" , "warning")
   else showTost( `Please Enter Your Password` , "red" , "warning")

  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="form">
        <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-700">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" >
            اسم المستخدم
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password">
            الرقم السري
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            عودة
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
