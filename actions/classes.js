import * as TYPES from './TYPES'
import * as axios from '../utils/axios'

export const setClasses = (payload) => {
    return {
        type: TYPES.SET_CLASSES,
        payload
    }
}

export const getClasses = () => {
    return dispatch => {
        axios.get('https://www.dnd5eapi.co/api/classes/')
        .then((result) => {
            let { results } = result.data
            dispatch(setClasses(results))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}