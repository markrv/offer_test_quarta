<template>
  <v-container>
    <h1>Task</h1>
    <v-data-table
      :headers="headers"
      :items="task"
      :loading="isLoading"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'Task',
  data: () => ({
    isLoading: false,
    options: {},
     headers: [
      { text: 'id', value: 'id' },
      { text: 'description', value: 'description' },
      { text: 'completed', value: 'completed' },
    ],
  }),
  computed: {
    ...mapState('Task', ['task']),
  },
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
