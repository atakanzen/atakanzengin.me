<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn dark v-on="on">Contact</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Send Your Message</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                label="Your Name"
                :error-messages="nameErrors"
                :counter="20"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                :error-messages="messageErrors"
                counter
                label="Message"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="black darken-1" text @click="sendEmail">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

require("dotenv").config();

export default {
  name: "Contact",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    message: { required }
  },
  data: () => ({
    dialog: false,
    name: "",
    email: "",
    message: ""
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be 20 characters maximum.");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("E-mail is required.");
      !this.$v.email.email && errors.push("E-mail must be valid.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required && errors.push("Message is required.");
      return errors;
    }
  },
  methods: {
    async sendEmail() {
      this.$v.$touch();

      if (!this.$v.$error) {
        const name = this.name;
        const email = this.email;
        const message = this.message;

        const data = {
          email,
          name,
          message
        };

        const url =
          "https://l7kpqfm7qh.execute-api.eu-central-1.amazonaws.com/sendEmail";

        let response = "";

        await axios
          .post(url, data)
          .then(res => (response = res))
          .catch(err => (response = err));

        try {
          if (response.data[0].statusCode === 202) {
            this.dialog = false;
            alert("Your e-mail has been sent. Thank you.");
          }
        } catch (err) {
          console.error(err);
          this.dialog = false;
          alert(
            "Oops, something went wrong. Please send your e-mail manually."
          );
        }
      }
    }
  }
};
</script>