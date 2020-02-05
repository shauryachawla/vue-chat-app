<template>
  <div class="chat container">
    <h2 class="teal-text center">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="text-darken-3 grey-text">{{message.content}}</span>
            <span class="time grey-text">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
export default {
  props: ["name"],
  name: "Chat",
  components: { NewMessage },
  data() {
    return {
      messages: []
    };
  },
  created() {
    db.collection("messages").orderBy('timestamp').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: doc.data().timestamp
          });
        }
      });
    });
  }
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
}
</style>