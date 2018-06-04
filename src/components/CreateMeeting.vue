<template>
  <v-container fluid >
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
      <v-text-field
            ref="Title"
            v-model="Title"
            label="Title"
            placeholder="Title"
            box
          ></v-text-field>
      </v-flex>
    </v-layout>
     <v-layout>
      <v-flex xs12 sm8 offset-sm2>
      <v-text-field
            ref="Tagline"
            v-model="Tagline"
            label="Tagline"
            placeholder="Tagline"
            box
          ></v-text-field>
      </v-flex>
    </v-layout>
      </v-container>
    </template>

<script>
  export default {

  }

</script>

<style scoped>
  input{
  min-width: 200px;
  min-height: 40px;
  font-size:18px;
  border: 1px solid black;
  background-color: #c1c1c1;
  }
  
  input:focus {
    background-color: #848484;
  }
  
  
</style>
