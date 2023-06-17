import React, { useState } from "react";

const SearchCom = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="search...."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchCom;
