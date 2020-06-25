import httpClient from './httpClient'

export const fetchTaskList = params => httpClient.get('/api/task/', { params: params })
