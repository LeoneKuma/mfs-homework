<template>
    <div id="nav" >
        <div class="nav-left">码蜂社博客</div>
        <div class="nav-right">
            <router-link class="nav-item" to="/">{{items[0]}}</router-link>
            <router-link class="nav-item" to="/about">{{items[1]}}</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name:"navigator",
    data() {
        return {
            items:["主页","关于"]
        }
    },
}
</script>

<style lang="stylus" scoped>
div#nav{
    max-width 80%
    margin 0 auto
    padding 20px 0px
    border-bottom  1px solid #eee
    display flex 
    justify-content space-between
    .nav-left{
        font-size 36px
        font-weight 400
        margin-left 15px
    }
    .nav-right{
        display flex
        align-items center
        margin-right 200px
        .nav-item{
            font-size 24px
            text-decoration none
            color #333
            margin auto 10px
        }

    }
    @media screen and (max-width:700px){
    .nav-left{
        text-align center
        margin 0 auto
    }
    .nav-right{
        display:none;
    }
    
}
    
}
</style>