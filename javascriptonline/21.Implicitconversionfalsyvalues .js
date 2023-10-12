const name = "Sam";
const number = 20;

if (name) {
    console.log("First condition");
}

if (number) {
    console.log("second condition")
}

const tweets = [
    {
        id: 10512,
        message: "Hello Twitter 👋",
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];

tweets.filter(tweet => {
    console.log(tweet.stats.likes > 30); // visualize tweet
})