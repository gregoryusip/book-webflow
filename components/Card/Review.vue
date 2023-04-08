<template>
  <div class="card-review">
    <div class="card-review--biodata">
      <img
        :src="require(`@/assets/img/review/${img}`)"
        alt="Reviewer Photo"
        class="card-review--biodata__img"
      />
      <div class="card-review--biodata__name">
        <h5>{{ name }}</h5>
        <div class="card-review--biodata__score">
          <div
            v-for="i in 5"
            :key="`score-${i}`"
            class="star-item star-item--review"
            :class="{
              'star-item--full': score - i >= 0,
              'star-item--half': score - i < 0 && score - i > -1,
            }"
          ></div>
        </div>
      </div>
    </div>
    <h5 class="card-review--quote">"{{ quote }}"</h5>
    <p class="card-review--desc">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "CardReview",
  props: {
    img: {
      type: String,
      default: "review-1.png",
    },
    name: {
      type: String,
      default: "Martin Philips",
    },
    score: {
      type: Number,
      default: 5,
    },
    quote: {
      type: String,
      default: "Awesome Impack",
    },
    desc: {
      type: String,
      default:
        "All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.",
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
