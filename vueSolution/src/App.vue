<script setup lang="ts">
import { ref } from 'vue';

//let title = "Vue (from variable)"
const title = ref("Vue (from variable)")

const modify = () => {
  title.value = "modified"
}

const username = ref("")

const log = () => {
  console.log(username.value)
}

const reset = () => {
  username.value = ""
}
</script>

<template>
  <div>Hello {{ title }}</div>
  <button @click="modify">Modify</button>
  <hr>
  <input placeholder="Username" type="text" v-model="username">
  <button @click="reset">reset</button>
  <button @click="log">log</button>
</template>
