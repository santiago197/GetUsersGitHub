import { Stack, Typography } from "@mui/material";
interface User {
  name: string,
  created_at: string,
  login: string,
}
interface Props {
  userState: User
}
const PrincipalInformation = ({ userState }: Props) => {
  const { name, created_at, login } = userState;

  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  )
}

export default PrincipalInformation;