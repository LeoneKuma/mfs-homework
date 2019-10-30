<template>
  <div id="article-detail">
    <h2 class="title">{{article.title}}</h2>
    <div class="subtitle">
      <span class="tag">{{article.tag}}</span>.
      <span class="time">{{article.time}}</span>.
      <span class="viewer-num">{{"浏览："+article.viewerNum}}</span>
    </div>
    <p v-for="(para,index) in article.content" :key="index">{{para}}</p>
  </div>
</template>

<script>
export default {
  created() {
  },
  watch: {
      '$route'(newVal){
          this.article.title="前端自动化测试探索" + newVal.params.id;
      }
  },
  data() {
    return {
      article: {
        title: "前端自动化测试探索" + this.$route.params.id,
        tag: "前端",
        time: "6.17.2017",
        viewerNum: 39,
        content: [
          "随着屏幕的大小变换，内容区域的元素会匹配屏幕重新布局，就是我们说的自适应效果。我们在.col列中追加class类就可以实现自适应效果。如超小屏幕(xs)、超大屏幕(xl)。栅格系统首先会匹配移动手机版小屏幕，所以每个.col都需要一个class如：.xs-*，这样的话如果大屏幕的类没有设置，它就会使用这个.xs-*。",
          "本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 首先本文不会探讨",
          "单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。"
        ]
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
div#article-detail {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2.title {
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  div.subtitle {
    margin-bottom: 30px;
    text-align: center;

    span {
      font-size: 13px;
      font-weight: 400;
      text-align: center;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>