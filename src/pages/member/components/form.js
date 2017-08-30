export default {
  data() {
    return {
      name: '',
      tel: '',
      province: -1,
      city: -1,
      district: -1,
      address: '',
      id: '',
      type: this.$route.query.type,
      addressData: require('js/address.json'),
      cityList: null,
      districtList: null
    }
  },
  created() {
    if(this.type === 'edit') {
      console.log(this.$route.params.obj)
    }
  },
  methods: {

  },
  watch: {
    province(val) {
      let index = this.addressData.list.findIndex(item => {
        return item.value === val
      })
      this.cityList = this.addressData.list[index].children
      this.city = -1
      this.district = -1
    },
    city(val) {
      if(val === -1) return
      let index = this.cityList.findIndex(item => {
        return item.value === val
      })
      this.districtList = this.cityList[index].children
      this.district = -1
    }
  }
}