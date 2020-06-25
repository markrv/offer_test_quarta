<template>
  <div class="container">
    <h1>Task</h1>
    {{ isLoading }}
    {{tasklies}}
  </div>
</template>

<script>

export default {
  name: 'Task',
  data: () => ({
    tasklies: [],
    isLoading: false,
    options: {},
  }),
  created() {
    this.isLoading = true
    this.$store.dispatch('Task/fetchTask').then(() => {
      this.isLoading = false
    })
  },
  methods: {
  }
}
</script>
