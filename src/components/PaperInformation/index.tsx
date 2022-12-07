import { Paper, Stack, Typography } from '@mui/material';

interface User {
  public_repos: string,
  followers: string,
  following: string
}
interface Props {
  userState: User
}
const PaperInformation = ({ userState }: Props) => {
  const { public_repos, followers, following } = userState;
  return (
    <>
      <Paper elevation={3}>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Paper>
    </>
  )
}
export default PaperInformation;