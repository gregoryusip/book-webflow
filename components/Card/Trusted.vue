<template>
  <div class="card-trusted group">
    <img
      :src="require(`@/assets/img/trusted/${img}`)"
      alt="Client"
      class="card-trusted--img"
    />
    <h4 class="card-trusted--title">{{ title }}</h4>
    <p class="card-trusted--desc">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CardTrusted",
  props: {
    img: {
      type: String,
      default: "trusted-1.png",
    },
    title: {
      type: String,
      default: "Amazen Corp",
    },
    desc: {
      type: String,
      default: "A long established fact that a who looking at its layout.",
    },
  },
};
</script>
