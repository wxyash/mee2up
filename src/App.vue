<template>
    <v-app>
        <v-navigation-drawer v-model="sidenav" temporary absolute>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in toolbar" :key="item.title" @click.lazy="sidenav=!sidenav" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
    <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="sidenav=!sidenav" ></v-toolbar-side-icon>
    <v-toolbar-title>
        Mee2up
    </v-toolbar-title>
    <v-spacer  ></v-spacer>

     <v-text-field
        prepend-icon="search"
        label="Search"
        solo-inverted
        class="mx-3"
        flat
      ></v-text-field>
      <v-btn class="secondary" >Search</v-btn>
    
    <v-toolbar-items class="hidden-sm-and-down"
     >
      <v-btn v-for="item in toolbar" flat router :to="item.route"><v-icon color="orange darken-2" left>{{item.icon}}</v-icon>{{item.title}}</v-btn>
    </v-toolbar-items>

</v-toolbar>    
  <br>
   <main>
      <div class="container">
          <router-view></router-view>
      </div>
       
   </main>
  </v-app>
    
</template>

<script>
    export default {
        data() {
            return {
                searchText: '',
                toolbar: [{
                        title: 'Home',
                        icon: 'home',
                        route: '/'
                    },
                    {
                        title: 'Create Meeting',
                        icon: 'group_add',
                        route: '/create'
                    },
                    {
                        title: 'Login/SignUp',
                        icon: 'account_circle',
                        route: '/signIn'
                    }
                ],
                sidenav: false
            }
        }
    }

</script>

<style scoped>


</style>
