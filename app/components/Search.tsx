"use client";

import { Input } from "@nextui-org/input";
import { SearchNormal1 } from "iconsax-react";
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Input
      isClearable
      type="email"
      variant="flat"
      startContent={
        <SearchNormal1 size="18" className="text-mainColor cursor-pointer" />
      }
      placeholder="Search For Products"
      onClear={() => console.log("input cleared")}
      className="lg:w-96 w-60"
      onChange={handleSearch}
    />
  );
};

export default SearchBox;
