<template>
  <article>
    <div>
      <h6>phone:</h6>
      <h2>{{ contact.phone }}</h2>
    </div>
    <div>
      <h6>email:</h6>
      <h2>{{ contact.email }}</h2>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
