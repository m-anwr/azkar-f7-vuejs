<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$device)
    },
}
</script>

<style lang="scss">

@font-face {
	font-family: "Naskh";
	font-style: normal;
	font-weight: 500;
	src: url("./assets/fonts/uthmantn.otf");
}

.arabicfont {
  font-size: 25px;
  font-weight: bold;
  font-family: "Naskh","Hafs","Adobe Arabic","Simplified Arabic","Traditional Arabic","Arabic Typesetting","Times New Roman","Tahoma","Arial","serif";
}

.padded {
  padding: 0 5px 0 5px;
}
.inline {
  display: inline
}
.text-muted {
  color: #777
}
.subtitle {
  color: #ff8000;
}
.linehightone {
  line-height: 1 !important
}
</style>
