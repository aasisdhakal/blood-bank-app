<template>
  <div class="pa-md-4 mx-lg-auto">
    <h1>{{ $route.params.id ? 'Edit' : 'Create' }}</h1>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="donor.name"
          label="Name"
          :rules="[(v) => !!v || 'Name is required']"
          required
      ></v-text-field>

      <v-text-field
          v-model="donor.sex"
          label="Sex"
          :rules="[(v) => !!v || 'Sex is required']"

          required
      ></v-text-field>

      <v-text-field
          v-model="donor.age"
          label="Age"

      ></v-text-field>

      <v-text-field
          v-model="donor.location"
          label="Location"
          :rules="[(v) => !!v || 'Location is required']"

          required
      ></v-text-field>
      <v-text-field
          v-model="donor.phone"
          label="Phone"
          :rules="[(v) => !!v || 'Phone is required']"
          required
      ></v-text-field>

      <v-select
          v-model="donor.blood_group"
          :items="blood_groups"
          label="Blood Group"
          :rules="[(v) => !!v || 'Blood Group is required']"
          required
      ></v-select>

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
      type: Object,
      default: () => ({
        name: '',
        age: '',
        sex: '',
        phone: '',
        location: '',
        blood_group: '',
      })
    },
    errors: null
  },
  data: () => ({
    valid: true,
    checkbox: false,
    blood_groups: [
      'O-',
      'A+',
      'B-',
      'O+',
      'A+',
      'B+',
      'AB+',
      'AB-',
    ]
  }),

  methods: {
    save() {
      if (this.$refs.form.validate()) {

        let requestData = {
          name: this.donor.name,
          age: this.donor.age,
          sex: this.donor.sex,
          phone: this.donor.phone,
          location: this.donor.location,
          blood_group: this.donor.blood_group
        }
        if (this.donor.id) {
          axios.patch('/donor/' + this.$route.params.id, requestData).then((response) => {
            this.donor = response.data.data
            this.$toast.open(response.data.message);
            this.$router.push('/')
          }).catch((error) => {
            this.$toast.open({
              message: error.response.data.message,
              type: 'error'
            });
          });
        } else {
          axios.post('/donor', requestData).then((response) => {
            this.donor = response.data.data
            this.$toast.open(response.data.message);
            this.$router.push('/')

          }).catch((error) => {
            this.$toast.open({
              message: error.response.data.message,
              type: 'error'
            });
          });
        }
      }
    }
  }
}

</script>

<style>

</style>