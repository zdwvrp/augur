<template>
  <div id="SlackConfig">
    <div id="not-logged-in" v-if="!isLoggedIn">
      <img src="../../assets/slackbutton.png" alt="sign in with slack" @click="signInWithSlack" />
      <p>Log in via Slack to configure tracked repositories</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SlackCongig", 
  methods: {
      ...mapActions("userModule", ["signInWithSlack"])
  }, 
  computed: {
      ...mapGetters("userModule", ["isLoggedIn"])
  }
};
</script>

<style>
    #not-logged-in {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 7rem;
    }

    #not-logged-in > img {
        width: 20rem;
        background-color: var(--grey);
        border-radius: .5rem;
        transition: box-shadow .3s ease;
    }

    #not-logged-in > img:hover {
        cursor: pointer;
        box-shadow: 0 0 4px 0 var(--grey);
    }
</style>