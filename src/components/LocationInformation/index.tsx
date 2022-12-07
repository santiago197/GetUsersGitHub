import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
interface User {
  location: string,
  twitter_username: string,
  blog: string,
  company: string
}
interface Props {
  userState: User
}
const LocationInformation = ({ userState }: Props) => {
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          {location !== null
            ? <Typography variant="body1" color="initial">{location}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {twitter_username !== null
            ? <Typography variant="body1" color="initial">@{twitter_username}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {blog !== null
            ? <Typography variant="body1" color="initial">{blog}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {company !== null
            ? <Typography variant="body1" color="initial">{company}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}
export default LocationInformation; 