import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { useState } from "react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

export default function ProductSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filteredProducts =
    query === ""
      ? []
      : products.filter((product) =>
          product.name?.toLowerCase().includes(query?.toLowerCase())
        );

  const handleSelect = (productName) => {
    const selected = products.find(
      (product) => product.name?.toLowerCase() === productName?.toLowerCase()
    );
    if (selected) {
      navigate(`/product/${selected.id}`);
    }
  };

  return (
    <Combobox value={query} onChange={handleSelect}>
      <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center gap-4 rounded-3xl px-4 py-3 bg-[#262626] min-w-80">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <ComboboxInput
            className="placeholder:font-semibold border-none outline-none bg-transparent w-full"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />
        </div>
        {filteredProducts.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-2 w-full rounded shadow max-h-60 overflow-y-auto">
            {filteredProducts.map((product) => (
              <ComboboxOption
                key={product.id}
                value={product.name}
                className="py-5 px-2 bg-[#131313]/90 backdrop-blur-md hover:bg-[#191919]/90 transition-colors text-white.70 cursor-pointer"
              >
                {product.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
