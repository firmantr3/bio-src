export const state = () => ({
    shrink: false,
    sidebar: true
});

export const mutations = {
    updateSidebar(state, value) {
        state.sidebar = value
    },
    updateShrink(state, value) {
        state.shrink = value;
    }
}
