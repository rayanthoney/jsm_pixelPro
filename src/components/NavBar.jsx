import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Pixel Pro Logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search Icon" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart Icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
