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
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="caption">{`@${login}`}</Typography>
    </>
  )
}

export default PrincipalInformation;