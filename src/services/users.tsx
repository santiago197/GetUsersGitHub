import { urlFetch } from '../constants'

export const getUsers = async (user: string) => {
  const response = await fetch(`${urlFetch}/${user}`,{
    method: 'GET'
  });

  const resp = response.json();

  return resp;
}