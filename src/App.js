import React from "react";
import "./style.css";
let arrangement = {
  A: [
    { "1": 1 },
    { "2": 0 },
    { "3": 1 },
    { "4": 1 },
    { "5": 1 },
    { "6": 0 },
    { "7": 1 }
  ],
  B: [
    { "1": 1 },
    { "2": 1 },
    { "3": 0 },
    { "4": 1 },
    { "5": 1 },
    { "6": 1 },
    { "7": 1 },
    { "8": 1 }
  ],
  C: [
    { "1": 1 },
    { "2": 0 },
    { "3": 0 },
    { "4": 1 },
    { "5": 0 },
    { "6": 0 },
    { "7": 0 },
    { "8": 1 },
    { "9": 0 }
  ],
  D: [
    { "1": 0 },
    { "2": 0 },
    { "3": 1 },
    { "4": 0 },
    { "5": 1 },
    { "6": 0 },
    { "7": 0 },
    { "8": 1 },
    { "9": 0 }
  ],
  E: [
    { "1": 1 },
    { "2": 1 },
    { "3": 1 },
    { "4": 0 },
    { "5": 0 },
    { "6": 1 },
    { "7": 1 },
    { "8": 1 },
    { "9": 0 }
  ],
  F: [
    { "1": 0 },
    { "2": 0 },
    { "3": 0 },
    { "4": 0 },
    { "5": 1 },
    { "6": 0 },
    { "7": 1 },
    { "8": 0 },
    { "9": 0 }
  ],
  G: [
    { "1": 1 },
    { "2": 1 },
    { "3": 1 },
    { "4": 1 },
    { "5": 1 },
    { "6": 1 },
    { "7": 1 },
    { "8": 1 },
    { "9": 1 }
  ]
};

export default function App() {
  return (
    <div>
      <h1>Seating arrangement</h1>
      {Object.keys(arrangement).map(key => {
        let row = arrangement[key];
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <p>{key} row: </p>
            {row.map((obj, index) => (
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: Object.values(obj)[0] ? "green" : "red",
                  marginRight: 2
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
