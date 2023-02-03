import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import Search from "../../assets/icons/searchIcon.svg";
import Close from "../../assets/icons/close.svg";
import BackArrow from "../../assets/icons/backArrow.svg";
import HoverOn from "../HoverOn/HoverOn";
import InputValueContext from "../../components/context/inputValueContext/InputValueContext";
import MicValueContext from "../../components/context/micValueContext/MicValueContext";
import { useWindowSize } from "react-use";

export default function Input({ showInput, setShowInput }) {

  const { width } = useWindowSize();

  const _value = useContext(InputValueContext);

  let micValue = useContext(MicValueContext);

  const [input, setInput] = useState("");

  const [isSearch, setIsSearch] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const ref = useRef(null);

  const handleFocus = () => {
    setIsSearch(true);
    ref?.current?.focus();
    ref.current.style.marginLeft = "unset";
  };

  const handleBlur = () => {
    setIsSearch(false);
    ref.current.style.marginLeft = "3.4rem";
  };

  const handleInputValue = (e) => setInput(e.target.value);

  const handleCloseBtn = () => {
    setInput("");
    ref?.current?.focus();
  };

  const handleSearch = () => {
    _value.setInputValue(input);
    setShowInput(false);
  }

  useEffect(() => {
    handleBlur();
    setInput(micValue.micValue);
  }, [micValue]);

  return (
    <div className={styles.container}>

      {showInput &&
        <img
          className={styles.backArrow}
          width='24px'
          height='24px'
          src={BackArrow}
          alt='BackArrow'
          onClick={() => setShowInput(false)}
        />
      }

      <div
        style={width <= 600 ? { width: '100%' } : { width: '60%' }}
        className={styles.inputBar}
      >
        {isSearch && <img width="100%" height="100%" src={Search} alt="search" />}

        <input
          ref={ref}
          type="text"
          value={input}
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputValue}
        />
        {input && (
          <img
            style={{ cursor: "pointer" }}
            width="100%"
            height="100%"
            src={Close}
            alt="close"
            onClick={handleCloseBtn}
          />
        )}
      </div>

      <div className={styles.searchIcon} onClick={() => input && setInput("")}>
        <img
          style={{ cursor: "pointer" }}
          width="24px"
          height="24px"
          src={Search}
          alt="search"
          onClick={handleSearch}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        {isHover && <HoverOn text={"Search"} />}
      </div>
    </div>
  );
}