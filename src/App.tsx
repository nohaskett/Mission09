import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

interface NcaaProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Welcome to the NCAA Basketball Team List!</h1>;
}

// Function to build an individual record
class Team extends React.Component<NcaaProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h1>{oneTeam.school}</h1>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

// Function to print out all the records
function TeamList() {
  const teamListStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Center cards horizontally
    backgroundColor: "#e0f7fa", // Light blue color
    gap: "16px",
  };

  const teamCardStyle: React.CSSProperties = {
    backgroundColor: "white", // White background for each card
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    flexBasis: "30%", // Adjust as needed for 3 cards in a row
    boxSizing: "border-box", // Include padding and border in width calculation
  };

  return (
    <div style={teamListStyle}>
      {data.teams.map((oneTeam, index) => (
        <div key={index} style={teamCardStyle}>
          <Team {...oneTeam} />
        </div>
      ))}
    </div>
  );
}

function App() {
  const appStyle: React.CSSProperties = {
    backgroundColor: "#e0f7fa", // Light blue color for the entire page
    margin: 0, // Reset margin
    padding: 0, // Reset padding
  };

  return (
    <div className="App" style={appStyle}>
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App; // Function App becomes tag that we can use, it is a component in the index.tsx
