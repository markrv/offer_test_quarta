import { fetchTaskList, createTask, updateTask, deleteTask } from '@/api/task.api'

const initialState = () => ({
  task: []
})

const state = initialState()

const getters = {}

const actions = {
  async fetchTask({ commit }, params) {
    try {
      const response = await fetchTaskList(params)
      commit('SET_TASK', response.data)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async create(context, { data }) {
    try {
      const response = await createTask(data)
      context.commit('ADD_TASK', data)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async update(context, {index, id, data }) {
    try {
      const response = await updateTask(id, data)
      context.commit('UPDATE_TASK', {index, task:data})
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  },
   async delete(context, data) {
    try {
      const response = await deleteTask(data.id)
      context.commit('REMOVE_TASK', data)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const mutations = {
  SET_TASK(state, task) {
    state.task = task
  },
  ADD_TASK(state, task) {
    state.task.push(task)
  },
  REMOVE_TASK(state, task) {
    const index = state.task.indexOf(task)
    state.task.splice(index, 1)
  },
  UPDATE_TASK(state, payload) {
    const { task, index } = payload
    Object.assign(state.task[index], task)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
