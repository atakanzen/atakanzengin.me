<template>
  <div id="app">
    <v-app dark>
      <v-row align="center" justify="center">
        <v-col cols="10" sm="8">
          <v-main>
            <v-container>
              <Me />
              <v-divider class="mb-4"></v-divider>
              <Contact />
            </v-container>
          </v-main>
        </v-col>
      </v-row>
    </v-app>
  </div>
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
  data: () => ({
    //
  })
};
</script>

<style >
body {
  margin: 0px;
  padding: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app {
  background-color: white;
}
</style>
