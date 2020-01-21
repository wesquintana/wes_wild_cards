import io from 'socket.io-client'

let socket = {};

export default {
  actions: {
    initalizeSocket({ commit, dispatch }) {
      //establish connection with socket
      socket = io('//localhost:3000')
      //Handle any on connection events 
      socket.on('CONNECTED', data => {
        console.log('Connected to socket, villany may commence')
      })

      // register all listeners
      socket.on('moveCard', data => {
        // TODO update commit to correct mutation
        // commit('updateProduct', data)
      })

    }

  }
}