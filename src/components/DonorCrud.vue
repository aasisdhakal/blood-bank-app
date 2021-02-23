<template>
  <div class="pa-md-4 mx-lg-auto">
    <h1>{{ $route.params.id ? 'Edit' : 'Create' }}</h1>{{this.name}}
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="donor.name"
          label="Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="donor.sex"
          label="Sex"
          required
      ></v-text-field>

      <v-text-field
          v-model="donor.age"
          label="Age"

      ></v-text-field>

      <v-text-field
          v-model="donor.location"
          label="Location"
          required
      ></v-text-field>
      <v-text-field
          v-model="donor.phone"
          label="Phone"
          required
      ></v-text-field>

      <!--      <v-select-->
      <!--          v-model="blood_group"-->
      <!--          :items="items"-->
      <!--          :rules="[v => !!v || 'Item is required']"-->
      <!--          label="Item"-->
      <!--          required-->
      <!--      ></v-select>-->

      <v-btn @click.prevent="save()" color="primary" class="mt-4">
        {{ $route.params.id ? 'Update' : 'Submit' }}
      </v-btn>
    </v-form>

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'DonorCrud',
  props: {
    donor: {
      type:Object,
      default: () => ({
        name:'',
        age:'',
        sex:'',
        phone:'',
        location:'',
        blood_group:'',
      })
    }


  },
  data: () => ({
    valid: true,
    checkbox: false,
  }),

  methods: {
    save() {

      let requestData = {
        name: this.name,
        age: this.age,
        sex: this.sex,
        phone: this.phone,
        location: this.location,

      }
      console.log(requestData)
      if (this.donor.id) {
        axios.patch('/donor/' + this.$route.params.id, requestData).then(response => (this.donors = response.data.data)).catch((error) => {
          console.log(error.response.data);
        });
      } else {
        axios.post('/donor', requestData).then(response => (this.donors = response.data.data)).catch((error) => {
          console.log(error.response.data);
        });
      }
    }
  }
}

</script>

<style>

</style>