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

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill color="blue" body="HTML+CSS 💪" />
      <Skill color="yellow" body="JavaScript 👍🏿" />
      <Skill color="lightgreen" body="Web Design 💪" />
      <Skill color="red" body="Git and GitHub 💪" />
      <Skill color="lightblue" body="React 👍🏿" />
      <Skill color="red" body="Svelte 👶🏽" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      {props.body}
    </div>
  );
}

export default App;
