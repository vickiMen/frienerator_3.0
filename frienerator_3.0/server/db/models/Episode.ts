const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*** 
All episodes
 * ***/
const EpisodeSchema = new Schema({
    season: Number,
    episode: Number,
    name: Array, // should be permutations of the episode name (season 5, episode 6, 5x6, TOW ... , The One With ...)
    script: String,
    videoIds: Array // will be intialized only when we search for a video of this episode
})

const Episode = mongoose.model('episode', EpisodeSchema)

module.exports = Episode

//TODO: import scripts insertion to the DB (including regex normalization)