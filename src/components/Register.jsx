import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showTost, TIME } from "../utils";
import uknown from '../assets/user.webp'
import Input from "./Input";
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    image: uknown,
    password: "",
    phone: "",
    accountType: "student",
    school: "",
    experience: "",
    price: 400,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const goBack = () => navigate(-1);

  const handleNext = () => {
    if (form.accountType !== "student") {
      if (form.price && (form.price < 400 || form.price > 600)) {
        showTost(`Price must be between 400DA and 600DA`, "red", "warning");
        return;
      }
    }
    const values = Object.values(form);
    const exist = values.findIndex((v) => v.length === 0);
    if (exist === -1 || (exist > 4 && form.accountType === "student")) {
      showTost(
        `Welcome ${form.username} , Success Registration`,
        "linear-gradient(to right, #00b09b, #96c93d)",
        "success"
      );
      localStorage.setItem("user", JSON.stringify(form));
      setTimeout(
        () =>
          navigate(form.accountType === "student" ? "/student" : "/trainer"),
        TIME
      );
    } else
      showTost(
        `Please Enter Your ${Object.keys(form)[exist]}`,
        "red",
        "warning"
      );
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "ecommerce");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhyrumptw/image/upload",
      {
        method: "POST",
        body: form,
      }
    );
    const data = await res.json();
    setForm((prev) => ({ ...prev, image: data.secure_url }));
  };
  return (
    <div className="min-h-screen flex items-center justify-center   px-4">
      <div className="form">
        <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-700">
          انشاء حساب
        </h2>
        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
        )}
        <Input
          label="الاسم الكامل"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
        <Input
          label="اسم المستخدم"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          label="كلمة السر"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          label="رقم الهاتف"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
         <Input
         label  = "صورة المستخدم"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        
        <div>
          <label className="block font-medium mb-1">نوع الحساب</label>
          <select
            name="accountType"
            value={form.accountType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="student">متدرب</option>
            <option value="trainer">مدرب</option>
          </select>
        </div>
        

        {form.accountType === "trainer" && (
          <>
            <Input
              label="اسم مدرسة السياقة"
              name="school"
              value={form.school}
              onChange={handleChange}
            />
            <Input
              label="سنوات الخبرة"
              name="experience"
              type="number"
              min="0"
              value={form.experience}
              onChange={handleChange}
            />
            <Input
              label="سعر الساعة"
              name="price"
              type="number"
              min="400"
              max="600"
              value={form.price}
              onChange={handleChange}
            />
          </>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={goBack}
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            عودة
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
