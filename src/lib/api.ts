import { API_BASE_URL } from '@/constants'
import axios from 'axios'

type PoemType = {
    id: number,
    date: string,
    piece: string,
    title: string,
    brief_summary: string,
}

export const getPoems = async  () => {
    const data: PoemType = await axios.get(
        `${API_BASE_URL}/poems`,
    ).then(res => {
        return res.data.data as PoemType
    }).catch(() => {
        return null
    })

    console.log({ data})

    return data
}