export default {
    // 컴포넌트 내에서 변형을 바로 호출하면 안됨 -> 액션 추가
    setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
    }
};