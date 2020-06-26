<template>
  <v-container>
    <h1>Task</h1>
    <v-data-table
      :headers="headers"
      :items="task"
      :loading="isLoading"
    >

      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >New Task</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="editedItem.assign_at" label="Assign_at"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" v-if="editedIndex !== -1">
                    <v-checkbox
                      v-model="editedItem.completed"
                      :label="(editedItem.completed)?'Completed':'Not completed'">
                    </v-checkbox>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="editedItem.description" label="Description"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.actions="{ item }">
        <span @click="editItem(item)">
          edit
        </span>
        <span @click="deleteItem(item)">
          delete
        </span>
      </template>

      <template v-slot:item.completed="{ item }">
        <v-simple-checkbox v-model="item.completed" disabled></v-simple-checkbox>
      </template>

    </v-data-table>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'Task',
  data: () => ({
    isLoading: false,
    dialog: false,
    options: {},
    headers: [
      { text: 'completed', value: 'completed' },
      { text: 'description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      description: '',
      assign_at: 0,
      completed: false,
    },
    defaultItem: {
      description: '',
      assign_at: 0,
      completed: false,
    },
  }),
  computed: {
    ...mapState('Task', ['task']),
    formTitle () {
      return this.editedIndex === -1 ? 'New Task' : 'Edit Task'
    },
  },
  created() {
    this.isLoading = true
    this.$store.dispatch('Task/fetchTask').then(() => {
      this.isLoading = false
    })
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.task.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      confirm('Are you sure you want to delete this item?') && this.$store.commit('Task/REMOVE_TASK', item)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.$store.commit('Task/UPDATE_TASK', { index: this.editedIndex, task:this.editedItem})
      } else {
        this.$store.commit('Task/ADD_TASK', this.editedItem)
      }
      this.close()
    },
  }
}
</script>
