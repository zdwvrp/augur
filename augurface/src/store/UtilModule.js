// const configObject = require("../../../augur.config.json");
import Vue from 'vue';

// module for utility global state
export default {
  namespaced: true,
  state: {
    // host: configObject["Frontend"].host,
    // port: configObject["Frontend"].port,
    // baseEndpointUrl: `http://${configObject["Frontend"].host}:${configObject["Frontend"].port}/api/unstable`,
    baseEndpointUrl: 'http://localhost:5000/api/unstable', 
    availableEndpoints: [
      'http://localhost:5000/api/unstable',
      'http://augur.osshealth.io/api/unstable'
    ]
  },
  mutations: {
    setBaseEndpointUrl(state, newValue) {
      Vue.set(state, "baseEndpointUrl", newValue);
    },
    addAvailableEndpoint(state, newEndpoint) {
      Vue.set(state, "availableEndpoints", [...state.availableEndpoints, newEndpoint]);
    }
  },
  actions: {

  },
  getters: {
    getAvailableEndpoints(state) {
      return state.availableEndpoints;
    },
    getAvailableEndpointsForDropdown(state) {
      // maps available endpoints into array compatible with prop for AugDropdown.vue
      return state.availableEndpoints.map(endpoint => { return { text: endpoint, value: endpoint } });
    }, 
    getCurrentEndpointUrlForDropdown(state) {
      // maps current endpoint into object compatible with prop for AugDropDown.vue
      return { text: state.baseEndpointUrl, value: state.baseEndpointUrl };
    }
  }
}