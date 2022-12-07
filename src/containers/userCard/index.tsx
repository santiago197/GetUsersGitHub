import { Grid, Avatar } from '@mui/material';
import PrincipalInformation from "../../components/PrincipalInformation/index";
import Description from "../../containers/Description/index";

interface User {
  name: string,
  created_at: string,
  login: string,
  avatar_url: string,
  bio: string,
  public_repos: string,
  blog: string,
  company: string,
  location: string,
  twitter_username: string
}
interface Props {
  userState: User
}
const UserCard = ({ userState }: Props) => {
  const { avatar_url } = userState;
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={3}>
        <Avatar
          alt="Image user GitHub"
          src={avatar_url}
          sx={{ width: 200, height: 230 }}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
      </Grid>
      <Description userState={userState} />
    </Grid >
  )
}
export default UserCard;