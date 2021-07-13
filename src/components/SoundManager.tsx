
export enum Sounds {
  Notification = "notification.mp3"
}

export const SoundManager = (props: Sounds) => {
    const audio = new Audio(props);
    audio.play();
}
