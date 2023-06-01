<script>
import Button from '../components/Button.vue'
// import HelloWorld from '../components/HelloWorld.vue';
import { evaluate } from 'mathjs'
export default {
  data() {
    return {
      number: ''
    }
  },
  components: {
    // HelloWorld,
    Button
  },
  methods: {
    calculate() {
      this.number = evaluate(this.number)
    }
    // addNumber(number){
    //     return this.value = number + number
    // },
    // subsctractNumber(number){
    //     return this.value = number - number
    // },
    // divideNumber(number){
    //     return this.value = number / number
    // },
    // multiplyNumber(number){
    //     return this.value = number * number
    // },
  }
}
</script>

<template id="app">
  <main>
    <v-card>
      <v-title style="display: flex; justify-content: center;"> 
        <h1>
           Calculatrice 
        </h1>
      </v-title>
      <div>
        <v-text-field>{{ number || 0 }}</v-text-field>
      </div>
      <form @submit.prevent="calculate">
        <!-- <HelloWorld /> -->
        <div class="d-center" style="height: 40px">
          <v-btn type="button" @click.stop="number += '7'"> 7</v-btn>
          <v-btn type="button" @click.stop="number += '8'"> 8</v-btn>
          <v-btn type="button" @click.stop="number += '9'"> 9</v-btn>
          <v-btn type="button" @click.stop="number = number.slice(0, -1)">
            <v-icon class="ms-2" start icon="mdi-arrow-left"> </v-icon
          ></v-btn>
        </div>
        <div class="d-center" style="height: 40px">
          <v-btn type="button" @click.stop="number += '4'"> 4</v-btn>
          <v-btn type="button" @click.stop="number += '5'"> 5</v-btn>
          <v-btn type="button" @click.stop="number += '6'"> 6</v-btn>
          <v-btn type="button" @click.stop="number += '-'"> -</v-btn>
        </div>
        <div class="d-center" style="height: 40px">
          <v-btn type="button" @click.stop="number += '1'"> 1</v-btn>
          <v-btn type="button" @click.stop="number += '2'"> 2</v-btn>
          <v-btn type="button" @click.stop="number += '3'"> 3</v-btn>
          <v-btn type="button" @click.stop="number += '+'"> +</v-btn>
        </div>
        <div class="d-center" style="height: 40px">
          <v-btn type="button" @click.stop="number += '0'"> 0</v-btn>
          <v-btn type="button" @click.stop="number += '.'"> .</v-btn>
          <v-btn type="button" @click.stop="number += '/'"> /</v-btn>
          <v-btn type="button" @click.stop="number += '*'"> *</v-btn>
        </div>
        <div class="d-center" style="height: 40px">
          <v-btn color="red" type="button" @click.stop="number = ' '" style="width: 50%"> AC</v-btn>
          <v-btn type="submit" color="green" style="width: 50%">=</v-btn>
        </div>
      </form>
    </v-card>
  </main>
</template>

<style>
#app {
  height: 100%;
}
.d-center {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  justify-items: center;
  width: 100%;
  height: 10em;
}
</style>
