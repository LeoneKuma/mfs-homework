<template>
  <div id="article-outline">
    <section v-for="article in articles" :key="article.id">
      <h2 class="title">{{article.title}}</h2>
      <div class="subtitle">
        <span class="tag">{{article.tag}}</span>.
        <span class="time">{{article.time}}</span>.
        <span class="viewer-num">{{"浏览："+article.viewerNum}}</span>
      </div>
      <div class="description">{{article.description}}</div>
      <div class="link">
        <router-link class="btn" :to="'/article/'+article.id">查看文章</router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          time: "2019.10.10",
          viewerNum: 30,
          title: "前端自动化测试探索1",
          description:
            "首先本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。",
          tag: "前端"
        },
        {
          id: 2,
          time: "2019.10.10",
          viewerNum: 30,
          title: "前端自动化测试探索2",
          description:
            "首先本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。",
          tag: "前端"
        },
        {
          id: 3,
          time: "2019.10.10",
          viewerNum: 30,
          title: "前端自动化测试探索3",
          description:
            "首先本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。",
          tag: "前端"
        }
      ]
    };
  },
  created() {
  }
};
</script>
<style lang="stylus" scoped>
div#article-outline {
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;

    h2.title {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    div.subtitle {
      margin-bottom: 30px;

      .tag, .viewer-num, .time {
        color: #7a8599;
        font-size: 13px;
      }
    }

    div.description {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    div.link {
      margin: 20px 0px;

      &:before, &:after {
        content: '|';
      }

      .btn {
        margin: 15px;
        text-decoration: none;
        color: black;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
</style>