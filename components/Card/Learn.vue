<template>
  <div class="card-learn">
    <div class="card-learn--number">
      <h6>{{ convertNumber(number) }}</h6>
    </div>
    <h5 class="card-learn--title">{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: "CardLearn",
  props: {
    number: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
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
