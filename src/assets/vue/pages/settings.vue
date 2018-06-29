<template>
  <f7-page>
    <f7-navbar title="اﻹعدادات" back-link="Back" sliding></f7-navbar>
    <f7-page>
      <f7-card dir="rtl" :style="[this.$store.state.arabicfont]" content="بسم الله الرحمن الرحيم"></f7-card>
      <f7-list form>
        <f7-list-item>
          <div>
            <f7-label>حجم الخط</f7-label>
          </div>
          <f7-stepper
            :min="20"
            :max="40"
            :step="1"
            :value="fontSize"
            @stepper:change="fontChanged"
          ></f7-stepper>
        </f7-list-item>
        <f7-list-item>
				  <div>
	          <f7-label>اﻹهتزاز عند انتهاء العداد</f7-label>
					</div>
					<f7-toggle
					 :checked="this.$store.state.vibrateWhenZekrCounterFinishes"
           @change="vibrationToggled"
					></f7-toggle>
        </f7-list-item>
        <f7-list-item>
				  <div>
	          <f7-label>العد تنازليا</f7-label>
					</div>
					<f7-toggle
					 :checked="this.$store.state.isDownCounting"
           @change="countDownToggled"
					></f7-toggle>
        </f7-list-item>
      </f7-list>
    </f7-page>
  </f7-page>
</template>
<script>
 export default {
   data() {
    return {
      fontSize: this.$store.getters.fontSize
    }
   },
   computed: {
     arabicfont() {
       return this.$store.state.arabicfont
     }
   },
   methods: {
     fontChanged(value) {
       this.$store.commit('fontSizeChanged', value)
     },
     vibrationToggled(e) {
       this.$store.commit('vibrationToggled', e.target.checked)
     },
     countDownToggled(e) {
       this.$store.commit('countDownToggled', e.target.checked)
     }
   }
  };
</script>
