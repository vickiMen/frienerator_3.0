// import * as mongoose from 'mongoose'
// import { Schema } as Schema from 'mongoose'

const mongoose = require('../mongoose')
const Schema = mongoose.Schema


/*****
 * this collection will hold all words that we already searched for at least once, 
 * and we have found videos that contain them
 *****/ 

const SearchedWordSchema = new Schema({
    word: String,
    matchedEpisodes: [ Schema(
        {
            videoId: String,
            timeStamp: {
                start: String,
                end: String,
                duration: String
            }
        },
        {
            _id: false
        })
    ],
    isReady: Boolean // in case we have 10 or more matched episodes for this word - isReady: true
},{strict:false})

const SearchedWord = mongoose.model('SearchedWord', SearchedWordSchema)

module.exports = SearchedWord