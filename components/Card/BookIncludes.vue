<template>
  <div class="card-bi">
    <div class="card-bi--left">
      <img
        src="@/assets/img/book/book-1.png"
        alt="Book Cover"
        class="card-bi--img"
      />
    </div>
    <div class="card-bi--right">
      <h5 class="card-bi--title">{{ title }}</h5>
      <p class="card-bi--desc">{{ desc }}</p>
      <div class="card-bi--points">
        <div
          v-for="(item, i) in points"
          :key="`points-${i}`"
          class="card-bi--points__container"
        >
          <BookPoint :title="item.title" :value="item.value" :type="'dark'" />
        </div>
      </div>
      <div class="button button-border-yellow text-primary-one">
        <p>Order Today</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookIncludes",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
      default: "This is Title",
    },
    desc: {
      type: String,
      default: "This is description",
    },
    points: {
      type: Array,
    },
  },
};
</script>
