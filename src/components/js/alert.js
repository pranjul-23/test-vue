export default {
  name: 'PopupModal',
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    open () {
      this.isVisible = true
    },
    close () {
      this.isVisible = false
    }
  }
}
