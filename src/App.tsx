import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { getUsers } from "./services/users";
import Searcher from "./components/Searcher/index";
import UserCard from "./containers/userCard/index"

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState({});
  const [notFound, setNotFound] = useState(false);
  const getUser = async (user: string) => {
    const userResponse = await getUsers(user)
    console.log(userResponse);
    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse)
    }

    if (userResponse.message === 'Not Found') {
      const { octocat } = localStorage;
      setInputUser(octocat);
      getUser('octocat');
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }

  useEffect(() => {
    getUser(inputUser)
  },
    [inputUser])
  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      borderRadius: 4,
      mt: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  )
}

export default App
