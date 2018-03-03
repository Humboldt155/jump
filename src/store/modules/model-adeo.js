
// initial state
const state = {
  modelId: '',
  modelAdeo: []
}

// mutations
const mutations = {
  setModelId (state, modelId) {
    state.modelId = modelId
  },
  setModelAdeo (state, modelAdeo) {
    state.modelAdeo = modelAdeo
  }
}

// getters
const getters = {
  modelId: state => state.modelId,
  modelAdeo: state => state.modelAdeo
}

// actions
const actions = {
  setModelId (vuexContext, modelId) {
    vuexContext.commit('setModelId', modelId)
  },
  setModelAdeo (vuexContext, modelAdeo) {
    vuexContext.commit('setModelAdeo', modelAdeo)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
