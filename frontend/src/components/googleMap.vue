
<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data  () {
    return {
      mapName: this.name + "-map",
    }
  },  mounted :function() {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(29.9511,90.0715)
    }
    const map = new google.maps.Map(element, options);
  }

};
</script>
<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>
