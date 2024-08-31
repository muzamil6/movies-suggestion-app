import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputChangeEvent, FormSubmitEvent } from "../type/type";

const useSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = (e: InputChangeEvent) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    if (query.length > 2) {
      navigate(`/search?query=${query}`);
    }
  };

  return {
    showSearch,
    searchHandler,
    query,
    handleSearch,
    handleSubmit,
  };
};

export default useSearch;
