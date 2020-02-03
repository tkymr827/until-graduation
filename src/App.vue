<template>
    <div id="app">
        <countdown1 :day="day" :hour="hour" :min="min" :sec="sec"></countdown1>

    </div>
</template>

<script>
import countdown1 from './components/countdown1.vue'
export default {
  components: {
    countdown1
  },
  data () {
    return {
      day: null,
      hour: null,
      min: null,
      sec: null
    }
  },
  mounted () {
    setInterval(() => {
      const graduation = new Date(2020, 2, 4, 14, 25)
      const now = new Date()
      let until = graduation - now

      this.day = Math.floor(until / (1000 * 60 * 60 * 24))
      until -= (this.day * (1000 * 60 * 60 * 24))

      this.hour = Math.floor(until / (1000 * 60 * 60))
      until -= (this.hour * (1000 * 60 * 60))

      this.min = Math.floor(until / (1000 * 60))
      until -= (this.min * (1000 * 60))

      this.sec = Math.floor(until / 1000)
    }, 1000)
  }
}
</script>

<style lang="scss">
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
}

</style>
