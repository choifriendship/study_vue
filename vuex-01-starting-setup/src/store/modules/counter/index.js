import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
    namespaced: true,
    // 상태는 모듈의 지역 상태
    state() {
        return {
            counter: 0
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
};