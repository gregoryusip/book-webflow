<template>
  <div class="section-title">
    <h2
      class="section-title--text"
      :class="[
        {
          'text-center': linePosition == 'middle',
        },
        {
          'text-primary-one': type == 'dark',
          'text-white': type == 'light',
        },
      ]"
    >
      {{ title }}
    </h2>
    <div
      class="section-title--line"
      :class="[
        {
          'section-title--line__middle': linePosition == 'middle',
          'section-title--line__left': linePosition == 'left',
        },
        {
          'section-title--line__dark': lineColor == 'dark',
          'section-title--line__light': lineColor == 'light',
        },
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      default: "This is Title",
    },
    linePosition: {
      type: String,
      default: "middle",
    },
    type: {
      type: String,
      default: "dark",
    },
    lineColor: {
      type: String,
      default: "light",
    },
  },
};
</script>
