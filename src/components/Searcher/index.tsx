import React, { useState } from "react";
import { IconButton, Stack, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  inputUser: string,
  setInputUser: (val: string) => void
}
const Searcher = ({ inputUser, setInputUser }: Props) => {


  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}

    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '90%',
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Stack>
  )
}

export default Searcher;