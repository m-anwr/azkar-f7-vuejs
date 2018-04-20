<template>
    <f7-page>
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon="fa fa-book"></f7-link>
            </f7-nav-left>
            <div class="title">أذكار</div>
        </f7-navbar>
        <f7-block-title class="arabicfont linehightone">قائمة الاذكار</f7-block-title>
        <f7-list class="components-list">
            <f7-list-item
              v-for="(zekr, index) in azkar"
              :link="'/dynamic-route/blog/' + index + '/post/' + 0 + '/'"
              :key="zekr.name"
              :title="zekr.name"
              class="arabicfont"
            >
                <f7-icon slot="media" icon="fa fa-bookmark-o fa-fw"></f7-icon>
            </f7-list-item>
        </f7-list>
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
};

</script>
