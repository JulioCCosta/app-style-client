<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/user.png"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>
    <template slot="dropdown">       
      <b-dropdown-item class="px-3" to="/admin/perfil/usuario"><i class="fa fa-user" />Perfil</b-dropdown-item>
      <b-dropdown-item class="px-3" to="/admin/perfil/configuracao"><i class="fa fa-wrench" />Configurações</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item class="px-3" @click="logout()" ><i class="icon-logout" />Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login');
	location.reload();
      })
    }
  }
}
</script>
