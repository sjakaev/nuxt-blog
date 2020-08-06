<template>
  <el-container
      type="flex"
      justify="center"
  >
      <el-header>
          <the-navigation />
      </el-header>
      <el-main>
          <nuxt />
      </el-main>
      <el-footer />
  </el-container>
</template>

<script>
    import TheNavigation from '@/components/main/TheNavigation'

    export default {
        components: {
            TheNavigation,
        }
    }
</script>

<style>
</style>
