import { findAllByPlaceholderText } from "@testing-library/react";
import Reach from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className="search"
    type="search" 
    placeholder={placeholder} 
    onChange={handleChange}></input> /* onChange is a Synthetic event */
);