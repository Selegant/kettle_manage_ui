<template>
  <div>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <Button type="primary" @click="queryList">Primary</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    queryList () {
      this.$http.get('api/menu/list')
        .then((response) => {
          this.value = JSON.stringify(response)
        })
    }
  }
}
</script>
