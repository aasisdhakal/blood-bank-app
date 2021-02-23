<template>
  <v-app class="pa-md-4 mx-lg-auto">
    <v-card>
      <v-btn
          href="/donor"
          class="mx-2"
          fab
          small
          dark
          color="blue"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>

      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table color="basil"
                    :headers="headers"
                    :items="donors"
                    :search="search"
      >
        <template v-slot:item.action="{item:donors}">
          <router-link
              :to="{
                    name: 'edit_donor',
                      params: {
                        id: donors.id,
                    },
              }">
            <v-icon title="Edit" small class="mr-2"> mdi-pencil</v-icon>
          </router-link>
          <v-icon title="Delete" onclick="open()" small> mdi-delete</v-icon>
        </template>
      </v-data-table>

    </v-card>

  </v-app>
</template>
<script>
import axios from 'axios';

export default {
  name: 'DonorsList',

  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          filterable: true,
          value: 'name',
        },
        {text: 'Age', value: 'age'},
        {text: 'Sex', value: 'sex'},
        {text: 'Blood Group', value: 'blood_group'},
        {text: 'Location', value: 'location'},
        {text: 'Phone', value: 'phone'},
        {text: 'Action', value: 'action'},

      ],
      donors: []
    }
  },

  methods: {
    open() {
      this.$toast.open({
        message: "Test message from Vue",
        type: "success",
        duration: 5000,
        dismissible: true
      })
    }
  },
  mounted() {
    axios.get('/donors').then(response => (this.donors = response.data.data)).catch((error) => {
      console.log(error.response.data);
    });

  }
}
</script>