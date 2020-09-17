<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <Me />
          <v-divider class="mb-4"></v-divider>
          <Contact />
        </v-container>
      </v-main>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2em;
}
</style>
