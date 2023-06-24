import React from "react";

export default function Sidebar({ level }) {
  let levelsArr = [
    " 1. 1,000",
    " 2. 2,000",
    " 3. 3,000",
    " 4. 5,000",
    " 5. 10,000",
    " 6. 20,000",
    " 7. 40,000",
    " 8. 80,000",
    " 9. 1,60,000",
    "10. 3,20,000",
    "11. 6,40,000",
    "12. 12,50,000",
    "13. 25.00,000",
    "14. 50,00,000",
    "15. 75,00,000",
    "16. 1 CRORE",
  ];

  let levelEntries = levelsArr.map((e, index) => (
    <div
      className={`levelEntry ${index + 1 <= level ? " active" : ""}`}
      key={index}
    >
      {e}
    </div>
  ));
  return <div className="sidebar">{levelEntries}</div>;
}
