<template>
  <article>
    <div class="text--primary font-weight-black text-h3" id="name">Atakan Zengin</div>

    <br />
    <div
      class="font-weight-bold text--secondary text-h4"
      id="title"
    >Self-Taught Developer &amp; Student</div>
    <br />

    <v-divider class="mb-4"></v-divider>

    <section id="body">
      <p class="text-body-1">
        I'm a full-stack developer and a senior university student in Istanbul, Turkey.
        <br />Very passionate about learning and improving.
      </p>

      <p class="text-body-1">
        Currently focusing on Web development, but I'm interested in Machine Learning and AI as well.
        <br />Hopefully I'll add these fields to my knowledge pot in the near future.
      </p>

      <p class="text-body-1">
        My field in academy is Translation and Interpretation in English.
        <br />So natural languages are one of my interests as well as programming languages.
        <br />Apart from this, I'm also interested in any form of Art and Music.
      </p>

      <p class="text-body-1">
        One of my goals is to find myself inside the technology industry,
        and create new solutions for the people.
        <br />I believe with hardwork and passion, I'll be able to contribute to our ever-growing technology.
      </p>

      <p class="text-body-1">
        Lastly if you have any enquiries, please contact me from
        <a
          href="mailto:atakanzzengin@gmail.com"
          id="link"
        >my email</a>.
        <br />Or alternatively use the contact button down below.
      </p>
    </section>
  </article>
</template>

<script>
export default {
  name: "Me"
};
</script>

<style scoped>
article a {
  color: black;
}
article {
  padding: 0;
}
</style>