import { Stack, Paper, Typography } from '@mui/material';
import PaperInformation from "../../components/PaperInformation/index";
import LocationInformation from "../../components/LocationInformation/index";
interface User {
  bio: string,
  public_repos: string,
  twitter_username: string,
  blog: string,
  company: string,
  location: string,
  followers: string,
  following: string
}
interface Props {
  userState: User
}
const Description = ({ userState }: Props) => {
  const { bio } = userState;
  return (
    <>
      <Stack>
        {
          bio !== null
            ? <Typography>{bio}</Typography>
            : <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        }
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState} />
      </Stack>
    </>
  )
}
export default Description;