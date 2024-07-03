import { useQuery } from 'react-query';
import getPersonDetails from '../lib/wikipedia';

const useWikipedia = (personName) => {
  return useQuery(['personDetails', personName], () => getPersonDetails(personName), {
    enabled: !!personName,
    retry: false,
  });
};

export default useWikipedia;
