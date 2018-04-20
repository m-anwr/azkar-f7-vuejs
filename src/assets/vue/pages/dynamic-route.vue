<template>
  <f7-page>
    <f7-navbar :title="azkar[$f7route.params['blogId']].name" class="arabicfont" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
      <f7-swiper>
        <f7-swiper-slide :params="{}" class="arabicfont" v-for="(item, index) in azkar[$f7route.params['blogId']].content" :key="'item_' + index">
          <div v-html="item.body" class=""></div>
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
  </f7-page>
</template>

<script>
import azkarJson from "../../json/azkar.json"
export default {
  data() {
    return {
      azkar: azkarJson
    }
  }
}
</script>
