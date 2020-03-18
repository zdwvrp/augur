<template>
  <vue-position-sticky>
    <div id="NavBar">
      <div class="nav-links">
        <nav-link v-for="link in links" :key="link.path" v-bind="link" />
      </div>
      <div class="buttons">
        <aug-icon-button iconClass="fas fa-bars" :circular="true" />
        <aug-icon-button iconClass="fas fa-user" :circular="true" />
      </div>
    </div>
  </vue-position-sticky>
</template>

<script>
import NavLink from "./NavLink.vue";
import AugIconButton from "../../../components/BaseComponents/AugIconButton.vue";

export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
      required: false
    }
  },
  components: {
    NavLink,
    AugIconButton
  }
};
</script>

<style scoped>
#NavBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-top: 0rem;
  box-shadow: 0 10px 10px 0 var(--grey);
  z-index: 20;
  position: relative;
}

.nav-links {
  display: flex;
  width: 800px;
}

.buttons {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  margin-right: 1rem;
}
</style>