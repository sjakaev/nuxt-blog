export const state = () => ({
    token: null,
})

export const mutations = {

}

export const actions = {
    async login({commit, dispatch}, formData) {
        setTimeout()
    }
}

export const getters = {
    isAuthenticated: state => Boolean(state.token),
}
