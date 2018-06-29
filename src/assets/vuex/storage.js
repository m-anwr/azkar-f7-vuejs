import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: 'state_v1.0',
    arabicfont: {
      fontSize: '28px',
      fontWeight: 'bold',
      fontFamily: '"Naskh","Hafs","Adobe Arabic","Simplified Arabic","Traditional Arabic","Arabic Typesetting","Times New Roman","Tahoma","Arial","serif"'
    },
    vibrateWhenZekrCounterFinishes: true,
    isDownCounting: true
  },

  getters: {
    fontSize: state => {
      return parseInt(state.arabicfont.fontSize.slice(0, -2))
    }
  },

  mutations: {
    fontSizeChanged (state, size) {
      if (size > 40 || size < 20)
        return;

      state.arabicfont.fontSize = size + 'px'
    },
    vibrationToggled(state, checked) {
      state.vibrateWhenZekrCounterFinishes = checked
    },
    countDownToggled(state, checked) {
      state.isDownCounting = checked
    },
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem(state.version)) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem(state.version)))
				);
			}
		}
  },
});
