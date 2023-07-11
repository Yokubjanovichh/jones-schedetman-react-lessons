import "./main.css";
import avatar from "./rasmim.jpeg";
function App() {
  return (
    <div className="card">
      <Avatar link={avatar} />
      <div className="data">
        <h1>Yuldashev Murodulla</h1>
        <Intro text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium eros eget dolor ultrices condimentum. Curabitur vehicula ligula non neque ullamcorper, eu vestibulum velit varius. Aliquam in justo euismod, viverra dolor at, sagittis lorem." />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img src={props.link} className="avatar" alt="avatar" />;
}

function Intro(props) {
  return <p>{props.text}</p>;
}

const skills = [
  {
    id: 1,
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    id: 2,
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    id: 3,
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    id: 4,
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    id: 5,
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    id: 6,
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map((e) => (
        <Skill key={e.id} color={e.color} skill={e.skill} level={e.level} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍🏿"}
        {level === "beginner" && "👶🏽"}
      </span>
    </div>
  );
}

export default App;
