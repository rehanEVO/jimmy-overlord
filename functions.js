module.exports = {

    ping: function(channel) {
        channel.send('Pong!');
    },

    hook: function(channel, title, message, color, avatar) {

    },

    splitEmbed: function(channel, description, deleteTimer) {
       
        // Check base fields
        let fields = Math.floor(description.length / 2048);
        let remaining = fields - (description.length % 2048);

        if (remaining < 0) fields += 1;
        // If remainder is greater than 0 add an extra field.

        for (var i = 0; i < fields; i++) { //Runs this as many times as fields declares

            // DeleteTimer
            channel.send({embed:{
                description: description.substring(0,2048) ,
                color: 0x527f68 // Default color for a ll messages here or pass it via arguments
            }})

            //Slice the first 2048 chars.
            description = description.slice(2048);


        }

    }

}
