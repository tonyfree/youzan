import Address from 'js/addressService.js'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      name: '',
      tel: '',
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      address: '',
      id: '',
      isDefault: false,
      type: this.$route.query.type,
      addressData: require('js/address.json'),
      cityList: null,
      districtList: null,
      instance: this.$route.query.instance,
      isInitVal: false
      // instance: JSON.parse(sessionStorage.getItem('instance'))
    }
  },
  // computed: {
  //   lists() {
  //     return this.$store.state.lists
  //   }
  // },
  // computed: mapState['lists'],
  computed: {
    ...mapState({
      lists: state => state.lists
    })
  },
  created() {
    if (this.type === 'edit') {
      let ad = this.instance
      this.provinceValue = parseInt(ad.provinceValue)
      this.isInitVal = true
      this.name = ad.name
      this.tel = ad.tel
      this.address = ad.address
      this.id = ad.id
      this.isDefault = ad.isDefault
    }
  },
  methods: {
    add() {
      // 需要做非空和合法性校验
      let { name, tel, provinceValue, cityValue, districtValue, address} = this
      let data = { name, tel, provinceValue, cityValue, districtValue, address}
      if (this.type === 'edit') {
        data.id = this.id
        data.isDefault = this.isDefault
        this.$store.dispatch('updateAction', data)
      } else {
        this.$store.dispatch('addAction', data)
      }
    },
    remove() {
      if (window.confirm("确认删除?")) {
        this.$store.dispatch('removeAction', this.id)
      }
    },
    setDefault() {
      Address.setDefault(this.id).then(res => {
        this.$store.dispatch('setDefaultAction', this.id)
      })
    }
  },
  watch: {
    lists: {
      handler() {
        this.$router.go(-1)
      },
      deep: true
    },
    provinceValue(val) {
      if (val === -1) return
      let index = this.addressData.list.findIndex(item => {
        return item.value === val
      })
      this.cityList = this.addressData.list[index].children
      this.cityValue = -1
      this.districtValue = -1
      if (this.type === 'edit' && this.isInitVal) {
        this.cityValue = parseInt(this.instance.cityValue)
      }
    },
    cityValue(val) {
      if (val === -1) return
      let index = this.cityList.findIndex(item => {
        return item.value === val
      })
      this.districtList = this.cityList[index].children
      this.districtValue = -1
      if (this.type === 'edit' && this.isInitVal) {
        this.districtValue = parseInt(this.instance.districtValue)
        this.isInitVal = false
      }
    }
  }
}