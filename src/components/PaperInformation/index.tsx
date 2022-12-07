import { Paper, Stack, Typography } from '@mui/material';

interface Props {
  userState: (e: any) => void,
}
const PaperInformation = ({ userState }: Props) => {
  return (
    <>
      <Paper elevation={3}>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{userState.public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{userState.followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{userState.following}</Typography>
        </Stack>
      </Paper>
    </>
  )
}
export default PaperInformation;