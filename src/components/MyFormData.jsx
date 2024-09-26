import React from "react";
import { brands } from "../constants";
import { colors } from "../constants";
function MyFormData() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(result.get("brand"), result.get("name") , result.get("color"));
  }
  return (
    <div className="base-container  flex justify-center ">
      <form onSubmit={handleSubmit} action="" className=" w-full  max-w-96">
        <div className="flex gap-5 ">
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />

          <select
            defaultValue="Brendni Tanlang*"
            name="brand"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Brendni Tanlang*</option>
            {brands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>

          <select
            defaultValue="Rangini tanlang*"
            name="color"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Rangini Tanlang*</option>
            {colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
          </select>

          <button className="btn btn-primary" type="submit">
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyFormData;
