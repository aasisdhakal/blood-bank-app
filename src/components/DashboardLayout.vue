<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Blood Bank
          </v-list-item-title>
          <v-list-item-subtitle>
            Value your own life
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$router.push({ name: item.route })">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
        <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DashboardLayout",
  data: () => ({
    drawer: null,
    items: [
      {title: 'Donors', icon: 'mdi-view-dashboard', route: 'donors'},
      {title: 'About', icon: 'mdi-help-box', route: 'about'},
    ],
  }),
}
</script>