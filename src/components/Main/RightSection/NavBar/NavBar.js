import React from "react";
import "./NavBar.module.css";

export default function NavBar() {

  const nav = [
    { li: 'All', id: 0 }, { li: 'Music', id: 1 }, { li: 'Movies', id: 2 }, { li: 'Gaming', id: 3 }, { li: 'Live', id: 4 },
    { li: 'Comedy', id: 5 }, { li: 'Thrillers', id: 6 }, { li: 'Scene', id: 7 }, { li: 'Mixes', id: 8 }, { li: 'Trailers', id: 9 },
    { li: 'Thoughts', id: 10 }, { li: 'Poadcasts', id: 11 }, { li: 'Sales', id: 12 }, { li: 'Computers', id: 13 },
    { li: 'Data Structures', id: 14 }, { li: 'Unboxing', id: 15 }, { li: 'News', id: 16 }, { li: 'Recently Uploaded', id: 17 }
  ]

  return (
    <nav>
      <ul>
        {nav.map((li, index) => <li key={index}>{li.li}</li>)}
        <li>All</li>
      </ul>
    </nav>
  );
}
