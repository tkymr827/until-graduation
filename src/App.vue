<template>
    <div id="app">
        <countdown1 :day="day" :hour="hour" :min="min" :sec="sec" :timeout="timeout" :passed="passed"></countdown1>
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
      sec: null,
      timeout: false,
      passed: null
    }
  },
  mounted () {
    setInterval(() => {
    //   const graduation = new Date(2020, 2, 4, 14, 25)
      const graduation = new Date(2020, 2, 4, 9, 55)
      const now = new Date()
      let until = graduation - now

      this.day = Math.floor(until / (1000 * 60 * 60 * 24))
      until -= (this.day * (1000 * 60 * 60 * 24))

      this.hour = Math.floor(until / (1000 * 60 * 60))
      until -= (this.hour * (1000 * 60 * 60))

      this.min = Math.floor(until / (1000 * 60))
      until -= (this.min * (1000 * 60))

      this.sec = Math.floor(until / 1000)

      if (now > graduation) {
        // console.log('finish')
        this.timeout = true
        // let sotugyo = new Date(2020, 2, 3, 1, 0)
        // let sugitayo = sotugyo.getTime() - now.getTime()
        let sugitayo = now.getTime() - graduation.getTime()
        this.passed = Math.floor(sugitayo / 1000 / 60 / 60 / 24)
      }
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
