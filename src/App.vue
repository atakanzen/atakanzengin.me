<template>
  <v-app id="vApp">
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="10" sm="8">
            <toggle-button
              id="toggle"
              @change="changeTheme()"
              :value="false"
              :margin="4"
              :labels="{checked: 'Dark Mode', unchecked: 'Light Mode'}"
              :width="80"
              :height="20"
              :color="{checked: '#303030', unchecked: '#A6A6A6'}"
            />

            <Me />
            <v-divider class="mb-4"></v-divider>
            <Contact />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
      document.querySelector("body").classList.toggle("dark-bg");
      const dividers = document.getElementsByTagName("hr");
      dividers.forEach(el => {
        el.classList.toggle("theme--light");
      });
    }
  }
};
</script>

<style >
#vApp {
  margin: 0px;
  padding: 0px;
  font-family: "Ubuntu", sans-serif;
}

.dark-bg {
  background-color: #121212;
}

.light-text {
  color: #e1e1e1 !important;
}

#toggle {
  float: right;
}
</style>
