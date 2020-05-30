<template>
  <v-row justify="center">
    <v-col cols="8">
      <form >

        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          :counter="10"
          label="password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>


        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import {login, getLocalUser} from './../../helpers/auth';
import { validationMixin } from "vuelidate";
import { required, maxLength, email,minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required, maxLength: maxLength(10),  minLength: minLength(8),  },
    email: { required, email },

  },

  data: () => ({
        password: "",
        email: "",
  }),

  computed: {

    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("password must be at least 8 characters long");
      !this.$v.password.maxLength &&
        errors.push("password must be at most 10 characters long");
      !this.$v.password.required && errors.push("password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {

    submit() {
        this.$store.dispatch('login');
        let email = this.email;
        let password = this.password;

        let data = {
            email,password
        }

        login(data)
            .then(response => {
                this.$store.commit('loginSuccess',response);
                this.$router.push({path:'/'});
            })
            .catch( (error) => {
                this.$store.commit('loginFailed',{error})
            })



      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.password = "";
      this.email = "";
    }
  }
};
</script>
