const remoteURL = "http://localhost:5002"


//just a javascript module not a component
export default {
  get(id) {
    return fetch(`${remoteURL}/candies/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/candies`).then(e => e.json())
  }
}