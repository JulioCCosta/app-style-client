<template>
<div>
    <div>
        <span class="ml-1">{{info.name}} &copy; <small>{{info.description}}</small></span>
    </div>    
</div>
</template>
<script>
import Info from '@/app-config.js'
export default {
    name: 'Footer',
    data(){
        return {
            info : Info
        }
    }
}
</script>

