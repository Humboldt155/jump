
// initial state
const state = {
  modelId: '200767'
}

// mutations
const mutations = {
  setModelId (state, modelId) {
    state.modelId = modelId
  }
}

// getters
const getters = {
  modelId: state => state.modelId
}

// actions
const actions = {
  setModelId (vuexContext, modelId) {
    vuexContext.commit('setModelId', modelId)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
