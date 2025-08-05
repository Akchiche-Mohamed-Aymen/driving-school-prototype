import TrainerCard from "./TraierCard";
import { trainers } from "../utils";
import { useState, useMemo } from "react";

export default function StudentPage() {
  const [search, setSearch] = useState("");

  const trainersData = useMemo(()=>{
    if(!search) return trainers
    return trainers.filter(t =>
        t.username.toLowerCase().includes(search.toLowerCase())
      );
  } , [search])
  return (
    <>
      <input
        type="text"
        placeholder="Search by username"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-96 bg-white my-3 mx-auto block"
      />

      <div className="flex flex-col items-center">
        {trainersData.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} />
        ))}
      </div>
    </>
  );
}
