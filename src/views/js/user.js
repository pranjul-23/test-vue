import { mapGetters } from 'vuex'
import Alert from '@/components/Alert.vue'

export default {
  name: 'User',
  components: {
    Alert
  },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    showAlert () {
      this.$refs.alert.open()
    },
    hideAlert () {
      this.$refs.alert.close()
    }
  }
}
