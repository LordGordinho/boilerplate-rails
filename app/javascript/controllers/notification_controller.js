import Notification from "@stimulus-components/notification"

export default class extends Notification {
  connect() {
    super.connect()
    console.log(Notification)
    console.log("Notification controller connected")
  }
}