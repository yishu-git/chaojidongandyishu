import {
    myget,
    mypost
} from './axios.js'
export const getMachineryList = async() => await myget('/jixie')
export const getNavigate = async() => await myget('/navigate-tree')
export const getcategory = async() => await mypost('/category')
export const getnames = async(data) => await mypost('/names', data)