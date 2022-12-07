import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
interface Props {
  userState: (e: any) => void,
}
const LocationInformation = ({ userState }: Props) => {
  //{ location } = userState;
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          {userState.location !== null
            ? <Typography variant="body1" color="initial">{userState.location}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {userState.twitter_username !== null
            ? <Typography variant="body1" color="initial">{userState.twitter_username}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {userState.blog !== null
            ? <Typography variant="body1" color="initial">{userState.blog}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {userState.company !== null
            ? <Typography variant="body1" color="initial">{userState.company}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}
export default LocationInformation; 