<template>
<div class="body-home">
    <!-- Fixed navbar -->
   <AppHeader>
      <b-navbar-nav class="d-md-down">
        <b-nav-item class="px-3" to="/"><i class="icon-home"></i>&nbsp;Home</b-nav-item>
        <b-nav-item class="px-3" to="/admin"><i class="icon-grid"></i>&nbsp;Painel</b-nav-item>
        <b-nav-item class="px-3" to="/ajuda"><i class="icon-magnifier"></i>&nbsp;Ajuda</b-nav-item>
        <b-nav-item class="px-3" to="/sobre"><i class="icon-info"></i>&nbsp;Sobre</b-nav-item>
      </b-navbar-nav>      
    </AppHeader>
    <!-- Begin page content -->
    <main class="home">
        <div class="container py-3">
            <router-view></router-view>
        </div>
    </main>
    <!-- Footer -->
    <footer class="footer">
        <!-- Copyright -->
        <div class="text-center">© 2018 Shevvo
          
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
</div>
</template>
<script>
import Footer from './Footer';
import { Header as AppHeader, Footer as TheFooter } from '@coreui/vue'

export default {
  name: 'DefaultContainer',
  components: {
    AppHeader,  
    TheFooter,
    Footer
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  },
}
</script>
<style scoped>
    /* Sticky footer styles
    -------------------------------------------------- */
    html {
        position: relative;
        min-height: 100%;
    }
    body {
        /* Margin bottom by footer height */
        margin-bottom: 60px;
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 60px;
        line-height: 60px; /* Vertically center the text there */
        background-color: #f5f5f5;
    }


    /* Custom page CSS
    -------------------------------------------------- */
    /* Not required for template or sticky footer method. */

    body > .container {
        padding: 60px 15px 0;
    }

    .footer > .container {
        padding-right: 15px;
        padding-left: 15px;
    }

    code {
        font-size: 80%;
    }
    .app-header{
      position: inherit;
    }
</style>


