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

const fruits = [
    { name: "alma", color: "piros" },
    { name: "korte", color: "barna" },
    { name: "narancs", color: "narancssarga" },
    { name: "cseresznye", color: "piros" },
  ]

  const names = [ "john", "jim", "jack", "jane" ]

  const isShown = ref(false)
</script>

<template>
  <div>Hello {{ title }}</div>
  <button @click="modify">Modify</button>
  <hr>
  <input placeholder="Username" type="text" v-model="username">
  <button @click="reset">reset</button>
  <button @click="log">log</button>
  <hr />
  {{ names }}
  <p v-for="name in names">{{ name  }}</p>
  <p class="text-success" v-for="fruit in fruits">{{fruit.name}} ({{fruit.color}})</p>

  <section>
    <button @click="() => isShown = !isShown">Toggle</button>
    <div v-if="isShown">Haho</div>
    <div v-else>Secret!</div>

    <div>{{ isShown ? "Haho" : "secret" }}</div>
  </section>
</template>
