import Axios from 'axios'

export const URL = 'https://jsonmock.hackerrank.com/datetime'

export const fetchDateAPI = async (setDates) => {
    const res = await Axios.get(URL)
    setDates(res.data)
}