<template>
  <v-app id="vApp">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="8">
        <v-main>
          <v-container>
            <toggle-button
              id="toggle"
              @change="changeTheme()"
              :value="false"
              :labels="{checked: 'Dark Mode', unchecked: 'Light Mode'}"
              :width="82"
              :color="{checked: '#303030', unchecked: '#A6A6A6'}"
            />

            <Me />
            <v-divider class="mb-4"></v-divider>
            <Contact />
          </v-container>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Me from "./components/Me";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    Me,
    Contact
  },
  methods: {
    changeTheme() {
      document.getElementById("vApp").classList.toggle("theme--dark");
      document.getElementById("link").classList.toggle("light-text");
      const dividers = document.getElementsByTagName("hr");
      dividers.forEach(el => {
        el.classList.toggle("theme--light");
      });
    }
  }
};
</script>

<style >
body {
  margin: 0px;
  padding: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.light-text {
  color: #e1e1e1 !important;
}

#toggle {
  float: right;
}
</style>
