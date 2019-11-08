<template>
    <div id="right-side">
        <div class="recent">
            <h2 class="title">近期文章</h2>
            <ul>
                <li v-for="item in recent" :key="item.id">
                    <router-link class="btn" :to="'/article/'+item.id">{{item.content}}</router-link>
                </li>
            </ul>
        </div>
        <div class="archives">
            <h2 class="title">文章归档</h2>
            <ul>
                 <li v-for="item in archives" :key="item.time">
                    <router-link class="btn" :to="'/time/'+item.time">{{getTimeString(item.time)+" ("+item.nums+")"}}</router-link>
                </li>
            </ul>
        </div>
        <div class="tags">
            <h2 class="title">标签</h2>
            <ul class="tags">
                 <li v-for="item in tags" :key="item.id">
                    <router-link class="btn tag" :to="'/tag/'+item.name">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
         
    </div>
</template>
<script>
export default {
    data() {
        return {
            recent:[
                {
                    id:1,
                    content:"JavaScript 最新特性实现的三大黑科技"
                },{
                    id:2,
                    content:"JavaScript 最新特性实现的三大黑科技"
                },{
                    id:3,
                    content:"JavaScript 最新特性实现的三大黑科技"
                }
            ],
            archives:[
                {
                    time:"2017-6",
                    nums:10
                },{
                    time:"2017-5",
                    nums:13
                },{
                    time:"2017-4",
                    nums:6
                }
            ],
            tags:[
                {
                    id:1,
                    name:"前端"
                },{
                    id:2,
                    name:"CSS"
                },{
                    id:3,
                    name:"Nodejs"
                },{
                    id:4,
                    name:"UI"
                },{
                    id:5,
                    name:"数据库"
                },{
                    id:6,
                    name:"爬虫"
                },{
                    id:7,
                    name:"Java"
                }
            ]
        }
    },
    methods: {
        getTimeString(time){
            var timeArray=time.split("-");
            return timeArray[0]+"年"+timeArray[1]+"月"
        }
    },
}
</script>

<style lang="stylus" scoped>
div#right-side {
    max-width 100%
    margin-top 20px
    display flex
    flex-direction column
    align-items flex-start 
    div.recent,div.archives,div.tags {
        h2{
            font-size 18px
            font-weight 400
            margin-left 40px
        }
        ul{
            list-style none 
            li{
                .btn{
                    font-size 14px
                    text-decoration none
                    color #333

                }
            }
        }
        ul.tags{
            list-style none 
            display flex
            flex-wrap wrap
            li{
                margin 3px 7px
                .btn.tag{
                    border 1px solid green
                    padding 2px
                    font-size 13px
                   
                }
            }
        }

    }
}

</style>