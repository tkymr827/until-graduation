<template>
    <div id="countdown1">
        <main>
            <h1>Until <span>Felica</span> <span>graduation</span></h1>
            <div class="countdown">
                <div class="day times">{{day}}<span>Days</span></div>
                <div class="hour times">{{hour}}<span>Hours</span></div>
                <div class="min times">{{min}}<span>Minutes</span></div>
                <div class="sec times">{{sec}}<span>Seconds</span></div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
  props: {
    day: Number,
    hour: Number,
    min: Number,
    sec: Number
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Basic|Russo+One&display=swap');

#countdown1{
    font-family: 'Basic', sans-serif;
    background:#171717;
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    main{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top:-15rem;
        h1{
            color:#fff;
            font-size:7rem;
            margin:-10rem auto 10rem;
        }
        .countdown{
            display:flex;
            // flex-wrap: wrap;
            position: relative;
            .times{
                background:#E7A362;
                height:20rem;
                width:20rem;
                margin:0 3rem;

                display:flex;
                align-items: center;
                flex-direction: column;

                color:#eee;
                font-size:12rem;

                -webkit-box-reflect: below 1rem linear-gradient(
                transparent,#0004); //反射してるやつ

                span{
                    background:#19899A;
                    font-size:4rem;
                    width:100%;
                    text-align: center;
                }
            }
        }
        @media screen and (max-width: 480px) {
            h1{
                // margin:10rem auto 10rem;
                margin:10rem 0 5rem -20rem;
                font-size:3rem;
                display: flex;
                flex-wrap: wrap;
                width:5rem;
                span{
                    &:nth-child(1){
                        transform: translateX(3rem);
                    }
                    &:nth-child(2){
                        transform: translateX(5rem);
                    }
                }

            }
            .countdown{
                height:40rem;
                width:100%;
                flex-wrap: wrap;
                justify-content: center;

                .times{
                    width:18rem;
                    height:18rem;
                    margin:.5rem;

                    justify-content: flex-end;

                    font-size:10rem;

                    margin:0 .5rem;

                    &:nth-child(-n+2){
                        -webkit-box-reflect: below 1rem linear-gradient(
                        transparent,#0000); //反射してるやつ                        // -webkit-box-reflect: none;
                    }
                }
            }
        }
    }
}
</style>
