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
    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          {location !== null
            ? <Typography variant="body1" color="initial">{location}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          {twitter_username !== null
            ? <Typography variant="body1" color="initial">@{twitter_username}</Typography>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog !== null
            ? <a href={blog} target="_black"><Typography variant="body1" color="initial">{blog}</Typography></a>
            : <Typography variant="body1" color="initial">Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
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