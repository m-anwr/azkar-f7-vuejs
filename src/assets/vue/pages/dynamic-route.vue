<template>
  <f7-page>
    <f7-navbar :title="currCollectionName" class="arabicfont" back-link="Back" sliding></f7-navbar>
    <div class="page" @click="decrease">
      <div class="page-content">
        <f7-block inner class="arabicfont">
            <p v-html="currZekr.body" class=""></p>
        </f7-block>
      </div>
    </div>
    <f7-toolbar bottom-md>
      <f7-link @click="previous">السابق</f7-link>
      <span>{{ remainingCount }}</span>
      <span>{{ progress }}</span>
      <f7-link @click="next">التالى</f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
import azkarJson from "../../json/azkar.json"
export default {
  data() {
    return {
      azkar: azkarJson,
      currCollectionIndex: this.$f7route.params['blogId'],
      currZekrIndex: 0,
      currCountDown: 0
    }
  },
  computed: {
    currCollectionName() {
      return this.azkar[this.currCollectionIndex].name;
    },
    currZekr() {
      return this.azkar[this.currCollectionIndex].content[this.currZekrIndex];
    },
    progress() {
      return (this.currZekrIndex + 1) + "/" + this.azkar[this.currCollectionIndex].content.length;
    },
    remainingCount() {
      return this.currZekr.count - this.currCountDown;
    }
  },
  methods: {
    next() {
      if (this.currZekrIndex + 1 < this.azkar[this.currCollectionIndex].content.length)
      {
        this.currZekrIndex += 1;
        this.resetCount();
      }
    },
    previous() {
      if (this.currZekrIndex - 1 >= 0)
      {
        this.currZekrIndex -= 1;
        this.resetCount();
      }
    },
    decrease() {
      if (this.remainingCount > 0)
      {
        this.currCountDown += 1;
      }
    },
    resetCount() {
      this.currCountDown = 0
    }
  }
}
</script>
<style>
</style>
