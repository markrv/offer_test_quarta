import httpClient from './httpClient'

const fetchTaskList = params => httpClient.get('/task/', { params: params })
export { fetchTaskList }