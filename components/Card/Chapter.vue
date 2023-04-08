<template>
  <div class="card-chapter group">
    <h5 class="card-chapter--title">{{ title }}</h5>
    <p class="card-chapter--desc">{{ desc }}</p>
    <div class="card-chapter--points">
      <div
        v-for="(item, i) in points"
        :key="`points-${i}`"
        class="card-chapter--points__item"
      >
        <BookPoint
          :title="item.title"
          :value="item.desc"
          :type="'dark'"
          :isFlex="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardChapter",
  props: {
    title: {
      type: String,
      default: "Chapter- 01   Get Started Intro",
    },
    desc: {
      type: String,
      default:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
    },
    points: {
      type: Array,
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
