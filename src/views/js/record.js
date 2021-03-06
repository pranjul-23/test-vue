import { mapGetters } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'Record',
  computed: {
    ...mapGetters(['userList'])
  },
  components: {
    Card
  },
  created () {
    this.$store.dispatch('getUsers')
  }
}
