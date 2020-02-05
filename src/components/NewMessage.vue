<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  methods: {
    addMessage() {
      //   console.log(this.newMessage, this.name, Date.now())
      if (this.newMessage) {
        this.feedback = null;
        // save
        db.collection("messages")
          .add({
            //add creates a unique id for you
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .then(function(docRef) {
            /* log data */
          })
          .catch(function(error) {
            /* error */
            console.log(error);
          });
        this.newMessage = null;
      } else {
        this.feedback = "you must type something.";
      }
    }
  },
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  }
};
</script>

<style>
</style>