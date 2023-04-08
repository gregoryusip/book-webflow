<template>
  <div class="card-article group">
    <div class="card-article--img">
      <img :src="require(`@/assets/img/article/${img}`)" alt="Article Image" />
    </div>
    <h5 class="card-article--title">{{ title }}</h5>
    <p class="card-article--desc">{{ desc }}</p>
    <div class="card-article--footer">
      <a href="#" class="card-article--footer__readmore"><h6>Read more</h6></a>
      <p class="card-article--footer__author">{{ author }} - {{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardArticle",
  props: {
    img: {
      type: String,
      default: "article-1.jpg",
    },
    title: {
      type: String,
      default: "The energy efficiency offers hydrotherapy or swim",
    },
    desc: {
      type: String,
      default:
        "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    },
    author: {
      type: String,
      default: "Author",
    },
    date: {
      type: String,
      default: "2023-05-03",
    },
  },
  methods: {
    convertNumber(number) {
      if (number < 10) {
        return `0${number}`;
      }
      return number;
    },
  },
};
</script>
