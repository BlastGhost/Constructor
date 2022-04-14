// Send a welcome message

// You need to create an event with the "member_join" type



// How it works 

send({
  content,    // The content of your message if you want to write something
  embeds,     // The embeds if you want to send one
  channelID,  // The id of the channel where the message will be sent
});

// You must either put a content or an embed
// You must indicate the channel id !





// Examples :

// Send a simple welcome message 
send({
  content: "Welcome on the server !",
  channelID: "the_channel_id",
});


// Send a welcome message with the username
send({
  content: `Welcome on the server ${__username} !`,
  channelID: "the_channel_id",
});


// Send a welcome message with a ping
send({
  content: `Welcome on the server ${__user} !`,
  channelID: "the_channel_id",
});


// To send an embed, checks on the embed example

