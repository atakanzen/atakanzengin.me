<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on">Contact</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Send Your Message</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Your name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Message" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="black darken-1" text @click="dialog = false">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    dialog: false
  })
};
</script>