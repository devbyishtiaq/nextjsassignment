import { render, fireEvent } from "@testing-library/react";
import { Filters } from "../Filters";
import React from "react";

describe("Filters component", () => {
  it("should update search value correctly", () => {
    const setSearchValueMock = jest.fn();

    const { getByLabelText } = render(
      <Filters searchValue="" setSearchValue={setSearchValueMock} />
    );

    const searchInput = getByLabelText("Search") as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(setSearchValueMock).toHaveBeenCalledWith("test");
  });
});
