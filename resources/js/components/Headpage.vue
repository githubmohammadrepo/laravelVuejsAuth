<template>

    <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="goRoute('/')">
            <v-list-item-title >
                Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="goRoute('/about')">
            <v-list-item-title>
                    Setting
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>



         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="goRoute('/login')">
            <v-list-item-title>
                    Login
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>



        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="goRoute('/logout')">
            <v-list-item-title>
                    logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        goRoute(path){
            if(path == '/logout'){
                this.$store.commit('logout');
                this.$router.go('/login')
            }

            this.$router.push(path);

        },



    },
    computed: {

    },
}
</script>
