import useSWR from 'swr'
import axios from 'axios'

export default () => {
  const { data } = useSWR('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json', axios.get)
  return data ? data.data : null;
}