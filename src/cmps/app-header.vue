<template>
  <header class="index-layout full">
    <div class="index-layout flex space-between align-center">
      <div v-if="showModal">
        <SignupModal @close="closeModal"/>
      </div>
      <div class="logo">Bitvault</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <!-- <RouterLink to="/stats">Stats</RouterLink> -->
        <div id="indicator"></div>
      </nav>
      <div v-if="user" class="flex column">
        <h3 v-if="user">Hello {{ user.name }}</h3>
        <h3 v-if="currRate" class="mar-r4 fs12">
          BTC Price {{ getCurrValue }}
        </h3>
      </div>
      <div v-if="!user" class="flex column">
        <button @click="openModal">Log in</button>
      </div>
    </div>
  </header>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
import SignupModal from "./signup.vue";
export default {
  components: { SignupModal },
  data() {
    return {
      user: null,
      currRate: null,
      showModal: null,
    };
  },
  async created() {
    this.user = await userService.getLoggedinUser();
    this.currRate = await bitcoinService.getRate();
    // this.showModal = false
  },
  methods: {
    openModal() {
      console.log(this.user)
      return this.showModal = true

;
      console.log(this.showModal);
    },
    closeModal() {
      this.showModal = false
      console.log("🚀 ~ file: app-header.vue:56 ~ closeModal ~ showModal", this.showModal);

    },
  },
  computed: {
    getCurrValue() {
      const btcMarketValue = this.currRate.USD.last;
      return "$" + btcMarketValue.toLocaleString("US-en");
    },

    
  },
};
</script>

<!-- <template>
    <header class="app-header">
        <div class="logo">
            <a href="/">
                <img src="../assets/img/logo.png" alt="logo" />
            </a>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
        </nav>
        <div class="user-logged">
            <button v-if='!user' title="Add User" @:click.stop="onOpenModalStatus">
                <v-icon name="hi-solid-user-add" />
            </button>
            <div class="user-details" v-if='user'>
                <h3 title="user.name">Hi {{ user.name }}</h3>
                <h6 title="user.name">You have {{ user.balance }} to spend</h6>
                <button @:click="logoutUser">Logout</button>
                <button>Make Transaction</button>
            </div>            
        </div>
        <Teleport to="body" >
            <div v-if="isLoginModalOpen" class="modal">
                <form v-clickout="onCloseModalStatus" @submit.prevent="onLogin" class="loginSignOut">
                    <input type="text" placeholder="name" autocomplete="false" ref='name' required>
                    <input type="password" placeholder="Password" ref='password' name="password">
                    <button>Login</button>
                </form>
            </div>
        </Teleport>
        <Teleport to="body" >
            <div v-if="isTransactionModalOpen" class="modal">
                <form v-clickout="onCloseModalStatus" @submit.prevent="onLogin" class="loginSignOut">
                    <fieldset>
                        <legend>From</legend>
                        <select v-model="selected">
                            <option>All good</option>
                            <option>Something nice</option>
                            <option>Anything goes</option>
                        </select>
                    </fieldset>
                    <button>Do Transaction</button>
                </form>
            </div>
        </Teleport>
    </header>
</template> -->

<!-- <script>
import { RouterLink } from 'vue-router'
import { OhVueIcon } from "oh-vue-icons"
import { clickout } from '@/directives/clickout.js'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    created() {
        this.setCurrUser()
    },
    methods: {
        ...mapMutations(['setCurrUser']),
        ...mapMutations(['setLogout']),
        ...mapMutations(['setOpenModal']),
        ...mapActions(['login']),
        ...mapActions(['transactions']),
        ...mapActions(['loginWithUserName']),
        onAddUser() {
            this.login()
        },
        logoutUser() {
            this.setLogout(null)
        },
        onTransactions() {
            this.transactions({ from: 'Me', to: 'Yarden', amount: 4000 })
        },
        onOpenModalStatus() {
            this.setOpenModal(true)
        },
        onCloseModalStatus() {
            this.setOpenModal(false)
        },
        onLogin(){
           const userName= this.$refs.name.value
           const password= this.$refs.password.value
           this.loginWithUserName({userName, password})
           this.onCloseModalStatus()
            
        }
    },
    computed: {
        ...mapGetters({ user: 'getLoginUser' }),
        ...mapGetters({ isLoginModalOpen: 'getLoginModalStatus' }),
        ...mapGetters({ isTransactionModalOpen: 'getTransactionModalStatus' })
    },
}
</script> -->