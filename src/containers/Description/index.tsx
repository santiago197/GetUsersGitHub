import { Stack, Paper, Typography } from '@mui/material';
import PaperInformation from "../../components/PaperInformation/index";
import LocationInformation from "../../components/LocationInformation/index";
interface Props {
  userState: (e: any) => void,
}
const Description = ({ userState }: Props) => {
  return (
    <>
      <Stack>
        {
          userState.bio !== null
            ? <Typography>{userState.bio}</Typography>
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