import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Radio Gaga', duration: '4:05' },
    { title: 'Killer Queen', duration: '4:25' },
    { title: 'Poker Face', duration: '4:00' },
    { title: 'Baby, Baby', duration: '3:45' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})