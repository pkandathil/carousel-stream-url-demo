
import Player from "./Player"


export class PlayerObj {
  streamUrl = ''
  player = null

  load(inputStreamUrl) {
    this.streamUrl = inputStreamUrl
    this.player = <Player streamUrl={ inputStreamUrl} />
  }
  pause() {
    console.log(`${this.inputStreamUrl} paused`)
  }
  play() {
    console.log(`${this.inputStreamUrl} played`)
  }
  delete() {
    console.log(`${this.inputStreamUrl} deleted`)
    this.streamUrl = ''
  }

  attachHTMLVideoElement () {
    return this.player
  }

}


export const create = () => {
  console.log('In created')
  return new PlayerObj()
}