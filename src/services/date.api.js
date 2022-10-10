import Axios from 'axios'

export const URL = 'https://jsonmock.hackerrank.com/datetime'

export const fetchDateAPI = (setGetDate) => {
    Axios.get(URL)
        .then(res => setGetDate(res.data))
}