import { useState } from "react";
import Input from "./Input"; // Make sure this is your custom Input component
import { showTost , TIME} from "../utils";

export default function EditTrainerModal({
  trainer,
  setTrainer,
  setShowModal,
}) {
  const [formData, setFormData] = useState(trainer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (formData.price && (formData.price < 400 || formData.price > 600)) {
        showTost(`Price must be between 400DA and 600DA`, "red", "warning");
        return;
      }
    else if (formData.experience && formData.experience < 0 ) {
        showTost(`Experience must be positive number`, "red", "warning");
        return;
      }
      showTost(
        `Success update trainer data`,
        "linear-gradient(to right, #00b09b, #96c93d)",
        "success"
      );
    setTrainer(formData);
    localStorage.setItem("user", JSON.stringify(formData));
    setTimeout(() => setShowModal(false), TIME);
    
  };

  return (
    <div className="modal">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex items-center justify-between p-2 pb-4 border-b-2 border-gray-400">
          <h2 className="text-xl font-semibold">Edit Trainer Info</h2>{" "}
          <button
            className=" text-gray-500 hover:text-red-500 text-xl"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-2">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <Input
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            label="School"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
          <Input
            label="Experience (years)"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            type="number"
            min="0"
          />
          <Input
            label="Price (DZD)"
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            min="400"
            max="600"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  );
}
