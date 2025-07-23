"use client";
import { useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getStoredSkills, storeSkills } from "@/units/skillStorage";

export default function EditSkillsPage() {
  const router = useRouter();
  const handleClick= () => {
        router.push('/Info');
    }
  const [skills, setSkills] = useState([
  { name: 'HTML', range: 90 },
  { name: 'CSS', range: 85 },
  { name: 'JavaScript', range: 65 },
  { name: 'React', range: 60 },
  ]);
useEffect(() => {
  setSkills(getStoredSkills());
}, []);

  const [newSkill, setNewSkill] = useState({ name: "", range: "" });

const handleAdd = () => {
  if (!newSkill.name || !newSkill.range) return;
  const updated = [...skills, newSkill];
  setSkills(updated);
  storeSkills(updated);
  setNewSkill({ name: "", range: "" });
};

const handleDelete = (index) => {
  const updated = skills.filter((_, i) => i !== index);
  setSkills(updated);
  storeSkills(updated);
};

  return (
    <div className="edit-skills-page">
      <div className="section-icon-edit">
        <h2>Skills</h2>
        <button className="cancel-btn" onClick={handleClick}>
          Cancel
        </button>
      </div>

      <div className="add-skill-form">
        <div className="skills-name">
        <p>Skill Name</p>
        <input
          type="text"
          placeholder="Enter skill name"
          value={newSkill.name}
          onChange={(e) =>
            setNewSkill({ ...newSkill, name: e.target.value })
          }
        />
        </div>
         <div className="skills-range">
        <p>Skill Range</p>
        <input
          type="number"
          placeholder="Enter skill range (0–100)"
          value={newSkill.range}
          onChange={(e) =>
            setNewSkill({ ...newSkill, range: e.target.value })
          }
        />
        </div>
        <button onClick={handleAdd} className="add-btn">
          Add Skill
        </button>
      </div>

  


<ul className="skills-list">
  {skills.map((skill, index) => (
    <li key={index} className="skill-bar">
      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${skill.range}%` }}
        >
          <span className="bar-label">
            {skill.name} 
          </span>
        </div>
      </div>
      <button onClick={() => handleDelete(index)} className="delete-btn">
        Delete
      </button>
    </li>
  ))}
</ul>


       <Image src='/assets/scale.png' alt="scale" width={1680} height={40} className="scale"/>
    </div>
    
  );
}
