import React from "react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  
  return (
    <div>
      <div style={styles.box}>ABOUT PAGE</div>
      <div style={styles.box}>ABOUT PAGE</div>
      <div style={{ ...styles.box, backgroundColor: "#BED7BA" }}>
        <button onClick={navigateToHome}>Go to Home</button>
      </div>
    </div>
  );
}

export default AboutPage;

const styles = {
  box: {
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F0E9",
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: '30px'
  },
};
