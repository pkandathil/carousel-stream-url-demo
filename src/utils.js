
import Player from "./Player"


export class PlayerObj {
  streamUrl = ''
  player = null

  load(inputStreamUrl) {
    this.streamUrl = inputStreamUrl
    this.player = <Player streamUrl={ inputStreamUrl} />
  }
  pause() {
    console.log(`${this.streamUrl} paused`)
  }
  play() {
    console.log(`${this.streamUrl} played`)
  }
  delete() {
    console.log(`${this.streamUrl} deleted`)
    this.streamUrl = ''
  }

  attachHTMLVideoElement () {
    return this.player
  }

}


export const create = () => {
  console.log('Creating a new player')
  return new PlayerObj()
}