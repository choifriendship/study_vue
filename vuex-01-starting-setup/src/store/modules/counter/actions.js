export default {
    // 액션은 비동기식 가능
    increment(context) {
        setTimeout(function () {
            context.commit('increment');
        }, 2000);
    },
    increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
    },
}