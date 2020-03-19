<template>
  <vue-position-sticky>
    <div id="NavBar">
      <div class="nav-links">
        <nav-link v-for="link in links" :key="link.path" v-bind="link" />
      </div>
      <div class="buttons">
        <aug-icon-button iconClass="fas fa-bars" :circular="true" @click.stop="toggleSettingsOpen" />
        <aug-icon-button iconClass="fas fa-user" :circular="true" />
      </div>
      <transition name="slide-right">
        <settings-panel v-show="isSettingsOpen" class="settings-panel" v-click-outside="closeSettingsPanel" ref="settingsPanel" @darkClick="closeSettingsPanel"/>
      </transition>
    </div>
  </vue-position-sticky>
</template>

<script>
import NavLink from "./NavLink.vue";
import AugIconButton from "../../../components/BaseComponents/AugIconButton.vue";
import SettingsPanel from "../../../components/SidePanels/SettingsPanel.vue";
import ClickOutside from "vue-click-outside";

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
    AugIconButton,
    SettingsPanel
  },
  data() {
    return {
      isSettingsOpen: false
    };
  },
  methods: {
    toggleSettingsOpen() {
      if (this.isSettingsOpen) {
        this.isSettingsOpen = false;
        this.$refs.settingsPanel.fadeOut();
      }
      else {
        this.isSettingsOpen = true;
        this.$refs.settingsPanel.fadeIn();
      }
    }, 
    closeSettingsPanel() {
      this.$refs.settingsPanel.fadeOut();
      this.isSettingsOpen = false;
    }, 
    openSettingsPanel() {
      this.$refs.settingsPanel.fadeIn();
      this.isSettingsOpen = true;
    }
  }, 
  directives: {
    ClickOutside
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
  border-bottom: 1px solid var(--grey);
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

.settings-panel {
  position: absolute;
  bottom: -100vh;
  right: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(400px);
}

.slide-right-enter-to,
.slide-right-leave {
  transform: translateX(0px);
}
</style>