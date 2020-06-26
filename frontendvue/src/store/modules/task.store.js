import { fetchTaskList } from '@/api/task.api'

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
  }
}

const mutations = {
  SET_TASK(state, task) {
    state.task = task
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
