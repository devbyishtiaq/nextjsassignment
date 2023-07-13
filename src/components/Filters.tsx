import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const Filters: FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Box>
        <TextField
          id="search"
          type="search"
          label="Search"
          size="small"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          sx={{
            width: 400,
            "& .MuiInputBase-root": {
              borderRadius: 20,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
