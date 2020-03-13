const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://cintaroja_user:FFc2M4UP@cluster0-ws4rk.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO, { useNewUrlParser: true }, err => {
    if (!err) {
        console.log("Conexion exitosa");
    }
});

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: String,
    resume: {
        type: String,
        maxlength: 150
    },
    duration: {
        type: Number,
        default: 90
    },
    genre: {
        type: String,
        enum: ['CO', 'AC', 'TE'],
        required: true
    },
    cover_url: [String],
    directors: {
        type: [{
            name: String,
            age: {
                type: Number,
                default: 18
            },
            nationality: {
                type: String,
                enum: ['US', 'MX'],
                required: true
            }
        }]
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie };