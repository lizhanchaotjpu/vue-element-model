<template>
  <div>
    <hellow-world></hellow-world>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import HelloWorld from '@/components/HelloWorld'
export default {
  data () {
    return {

    }
  },
  components: {
    'hellow-world': HelloWorld
  },
  mounted () {
  },
  methods: {
    ...mapActions('account', ['login'])
  }
}
</script>
