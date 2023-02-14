<template>
  <div class="contact-filter">
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        @input="onFilter"
        v-model="filterBy.txt"
        required
      />
      <label for="name" class="form__label">Search</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss"></style>
