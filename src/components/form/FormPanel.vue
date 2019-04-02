
<template>
 <div>
   <b-row>
     <b-col sm="12">
       <b-card>
          <div slot="header">
           <strong>{{module.nome}}</strong><small> {{module.description}}</small>
          </div>
          <slot>Form</slot>
          <div slot="footer">
           <div class="my-3"></div>
          </div>
       </b-card>
      </b-col>
   </b-row>
 </div>    
</template>
<script>
    export default {
        name: "FormPanel",
        props: ['module']
    }
</script>
