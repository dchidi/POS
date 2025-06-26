import { IoSearch } from "react-icons/io5";
import { Row } from "../../layouts/row_column";
import styles from "./Search.module.css";
import { useRef } from "react";

interface SearchProps {
  placeholder?: string;
  callback: () => void;
}
const Search: React.FC<SearchProps> = ({ placeholder, callback }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchClick = () => {
    inputRef.current?.focus();
  };
  return (
    <Row className={styles.root}>
      <div className={styles.searchIcon} onClick={handleSearchClick}>
        <IoSearch />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        onKeyDown={callback}
        ref={inputRef}
      />
    </Row>
  );
};

export default Search;
