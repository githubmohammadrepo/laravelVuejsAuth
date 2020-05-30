<template>
    <v-row>
        <v-col v-for="todo in todos" :key="todo.id">
            <card >
                <template v-slot:title>{{todo.title}}</template>
                <template v-slot:subtitle>{{todo.subtitle}}</template>
                <template v-slot:content>{{todo.content}}</template>
            </card>
        </v-col>

    </v-row>

</template>

<script>
import card from './Card'

  export default {
    data: () => ({
      show: false,
    }),
    methods:{

    },
    computed:{
        todos(){
           return (this.$store.getters.getTodos);
        }
    },
    components:{
        card
    }
  }
</script>
