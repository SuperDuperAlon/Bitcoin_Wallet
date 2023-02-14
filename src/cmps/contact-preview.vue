<template>
  <section class="preview">
    <div class="flex justify-center align-center column">
      <RouterLink :to="`/contact/${contact._id}`">
        <img
          v-bind:src="'https://robohash.org/' + contact.name + '?set=set2'"
        />
      </RouterLink>
      <div class="flex row">
        <div class="flex justify-start">
          <button class="contact">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.phone }}</h3>
          </button>
        </div>
        <div class="flex">
          <button>Contact</button>
          <button>X</button>
        </div>
      </div>
    </div>
  </section>
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

<style lang="scss">
.preview {
  display: flex;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
}
</style>
