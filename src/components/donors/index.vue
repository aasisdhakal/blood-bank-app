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
        <v-row>
          <v-col
              class="d-flex"
              cols="6"
              sm="4"
          >
            <v-select
                v-model="filterBy"
                :items="filterData"
                item-text="name"
                item-value="value"
                label="Filter By"
                dense
            ></v-select>
          </v-col>
          <v-col
              class="d-flex"
              cols="12"
              sm="8"
          >
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table color="basil"
                    :headers="headers"
                    :items="donors"
                    :search="search"
                    :loading="loading"
                    :options.sync="paginator"



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
          <v-icon title="Delete" @click="open(donors.id)" small> mdi-delete</v-icon>
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
      filterData: [
        {name: 'Default', value: 'default'},
        {name: 'Location', value: 'location'},
        {name: 'Blood Group', value: 'blood_group'}
      ],
      filterBy: '',
      loading: true,
      pagination:'',
      donors: [],
      watchData: false,
      paginator:{
        page: 1,
        itemsPerPage: -1,
      }
    }
  },
  watch: {
    watchData: function () {
      this.fetchApiData();
      this.watchData = false;
    },
    search: function () {
      if (this.filterBy !== 'default') {
        this.fetchApiData();
      }
    },
      filterBy: function (){
        if (this.filterBy === 'default'){
          this.fetchApiData();
        }
      }
  },
  methods: {
    open(id) {
      axios.delete('/donor/' + id).then((response) => {
        this.$toast.open(response.data.message);
        this.watchData = true;
      }).catch((error) => {
        this.$toast.open({
          message: error.response.data.message,
          type: 'error'
        });
      });
    },
    searchBy(){
      if (this.filterBy){
        return this.filterBy + '=' + this.search;
      }
    },
    fetchApiData() {
      axios.get('/donors?'+ this.searchBy()).then((response) =>{
        this.donors = response.data.data;
        this.pagination = response.data.pagination
      }).catch((error) => {
        this.$toast.open({
          message: error.response.data.message,
          type: 'error'
        });

      });
      this.loading = false
    }
  },
  mounted() {
    this.fetchApiData()
  }
}
</script>