<template>
  <div class="point">
    <div class="point--left"></div>
    <div class="point--right" :class="{ 'point--right__flex': isFlex }">
      <h5
        class="point--right__title"
        :class="
          type == 'light'
            ? 'point--right__title--light'
            : 'point--right__title--dark'
        "
      >
        {{ title }}:
      </h5>
      <p
        class="point--right__value"
        :class="
          type == 'light'
            ? 'point--right__value--light'
            : 'point--right__value--dark'
        "
      >
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookPoint",
  props: {
    title: {
      type: String,
      default: "Pages",
    },
    value: {
      type: String,
      default: "586pages",
    },
    type: {
      type: String,
      default: "light",
    },
    isFlex: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
