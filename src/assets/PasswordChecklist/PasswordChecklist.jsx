// PasswordChecklist.jsx
import React from "react";

const PasswordChecklist = ({ password, rules }) => {
  return (
    <div
      style={{
        fontSize: "0.8rem",
        backgroundColor: "#f8f8f8",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "0.5rem",
        marginTop: "0.5rem",
        color: "#555",
      }}
    >
      <strong>Password must include:</strong>
      <ul
        style={{
          margin: "0.3rem 0",
          paddingLeft: "1.2rem",
          listStyleType: "none",
          textAlign: "left",
        }}
      >
        {rules.map((rule, index) => {
          const isValid = rule.test.test(password);
          return (
            <li key={index} style={{ color: isValid ? "green" : "red" }}>
              {isValid ? "✅" : "❌"} {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordChecklist;
