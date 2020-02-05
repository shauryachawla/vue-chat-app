<template>
  <div class="chat container">
    <h2 class="teal-text center">Ninja Chat</h2>
    <div class="card">
        <div class="card-content">
            <ul class="messages">
                <li>
                    <span class="teal-text">Name</span>
                    <span class="text-darken-3 grey-text">message</span>
                    <span class="time grey-text">time</span>
                </li>
            </ul>
        </div>
        <div class="card-action">
            <input type="text">
        </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['name'],
  name: "Chat",
  data() {
    return {};
  }
};
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
}
</style>