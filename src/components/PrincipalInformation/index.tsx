import { Stack, Typography } from "@mui/material";
interface Props {
  userState: (e: string) => void,
}
const PrincipalInformation = ({ userState }: Props) => {
  return (
    <>
      <Stack>
        <Typography>{userState.name}</Typography>
        <Typography>{userState.created_at}</Typography>
      </Stack>
      <Typography>{userState.login}</Typography>
    </>
  )
}

export default PrincipalInformation;