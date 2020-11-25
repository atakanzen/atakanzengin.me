<template>
<article>
  <div class="font-weight-black" id="name">Atakan Zengin</div>

  <br />
  <div class="font-weight-bold" id="title">Self-Taught Developer &amp; Student</div>
  <br />

  <v-divider class="mb-4"></v-divider>

  <section id="body">
    <p>
      I'm a developer and a senior university student
      <br />in Istanbul, Turkey. Currently working at an e-commerce platform.
      <br>Very passionate about learning and improving as well.
    </p>

    <p>
      Focusing on Web development, but I'm interested
      <br />in Machine Learning and AI too. Hopefully I'll add these
      <br />fields to my knowledge pot in the near future.
    </p>

    <p>
      My field in academy is Translation and Interpretation in English.
      <br />So natural languages are one of my interests as well
      <br />as programming languages. Apart from this, I'm
      <br />also interested in any form of Art and Music, literally.
    </p>

    <p>
      I always want to create new solutions for the people.
      <br />I believe with hardwork and passion,
      <br />I'll be able to contribute to our ever-growing technology.
    </p>

    <p>
      Lastly if you have any enquiries, please contact me from
      <a href="mailto:atakanzzengin@gmail.com" id="link">my email</a>.
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
  font-size: 1.2rem;
}

#name {
  font-size: 4rem;
  line-height: 1em;
  margin-top: 0.7em;
}

#title {
  font-size: 2rem;
  font-style: italic;
  line-height: 1em;
}
</style>
