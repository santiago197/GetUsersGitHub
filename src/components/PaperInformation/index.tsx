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
      <Paper elevation={3} >
        <Stack spacing={3} direction="row" sx={{ justifyContent: 'space-evenly', m: 2 }}>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="h5">Repos</Typography>
            <Typography variant="h6">{public_repos}</Typography>
          </Stack>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="h5">Followers</Typography>
            <Typography variant="h6">{followers}</Typography>
          </Stack>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="h5">Following</Typography>
            <Typography variant="h6">{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  )
}
export default PaperInformation;