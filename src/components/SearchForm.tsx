import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/gifs/search?${new URLSearchParams({ q: inquiry })}`);
  };

  return (
    <form className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="inquiry">Inquire about gifs</label>
      <input
        type="text"
        name="inquiry"
        id="inquiry"
        value={inquiry}
        onChange={(e) => setInquiry(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
