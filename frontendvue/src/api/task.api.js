import httpClient from './httpClient'

const fetchTaskList = params => httpClient.get('/task/', { params: params })
const createTask = data => httpClient.post('/task/', data)
const updateTask = (id, data) => httpClient.put(`/task/${id}/`, data)
const deleteTask = (id) => httpClient.delete(`/task/${id}/`)

export { fetchTaskList, createTask, updateTask, deleteTask }