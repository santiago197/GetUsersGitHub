import { Grid, Avatar } from '@mui/material';
import PrincipalInformation from "../../components/PrincipalInformation/index";
import Description from "../../containers/Description/index";

interface Props {
  userState: (e: string) => void,
}
const UserCard = ({ userState }: Props) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Avatar
          alt="Image user GitHub"
          src={userState.avatar_url}
          sx={{ width: 100, height: 100 }}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
      </Grid>
      <Description userState={userState} />
    </Grid>
  )
}
export default UserCard;