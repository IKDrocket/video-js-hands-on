const player = videojs("my-video", {
  poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
  // 動画のアスペクト比を自動で調整する
  fluid: true,
  // コントロールバーを表示にする
  controls: true,
  // 自動再生を有効にする
  autoplay: false,
  // ループ再生を無効化する
  loop: false,
  // 動画読み込み設定("auto" or "metadata" or "none")
  preload: "auto",

  //再生速度の設定
  playbackRates: [0.25, 0.5, 1, 1.5, 2],

  //ローディングの表示
  LoadingSpinner: true,

  //音量は縦に表示
  controlBar: {
    volumePanel: { inline: false },
  },
  tracks: [
    {
      src: "./captions/jp.vtt",
      kind: "captions",
      srclang: "jp",
      label: "Japanese",
    },
    {
      src: "./captions/en.vtt",
      kind: "captions",
      srclang: "en",
      label: "English",
    },
  ],
});
