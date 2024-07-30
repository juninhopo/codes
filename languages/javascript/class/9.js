// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate
    this.name = info.name
  }
}

// Child Class
class Song extends Media {
  constructor(songData) {
    super(songData)
    this.artist = songData.artist
  }
}

const mySong = new Song({
  artist: 'Queen',
  name: 'Bohemian Rhapsody',
  publishDate: 1975,
})
