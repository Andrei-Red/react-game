import { Howl } from 'howler';
import hit from "./../../../../assets/audio/hit.mp3"

export const soundPalyHit = () => {
  const sound = new Howl ({
    src: hit,
    html5: true,
    autoplay: false
  })
  sound.play()
}