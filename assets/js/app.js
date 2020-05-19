var app = angular.module('app', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.experiences =
    [
        {
            title: 'DermaVigil',
            text: 'An iOS App built on SwiftUI that tracks user skin measurements periodically using a Bluetooth low Energy and a corresponding peripheral. It has a fully functional login and sign up screen using Firebase as well as a database of stored User Profile preferences. In order to build this project, I taught myself SwiftUI and basic iOS development using XCode. This App was 100% created by myself, and it stands to be my first application of mobile programming!',
            image: 'assets/img/DermaVigil.png',
            link: 'https://github.com/arhubdulal/DermaVigil'
        },
        {
            title: 'GradeCentral',
            text: 'Ever wondered how you compared to other students in your class? Further than that, wondering what your projected grade is for the time being? These are questions that U.C Berkeley students have on a day-to-day basis! My roommate and I decided to address this question, creating a web app that can determine ones standing in a U.C Berkeley course, utilizing database SQL integration, parsing, and an interactive UI.',
            image: 'assets/img/smartPrice.png',
            link: 'https://github.com/arhubdulal/GradeCentral'
        },
        {
            title: 'SmartPrice',
            text: 'A project done at a Hackathon, I had a lot of fun making this project! My team and I decided to develop under the API sub category, utilizing the eBay API to build a web app that serves as an advanced price-prediction for eBay products. Thats right, any product can be accurately priced within a standard deviation! I picked up Flask and became well acquainted with HTML, CSS, and JavaScript during this development.',
            image: 'assets/img/gitlet.png',
            link: 'https://github.com/arhubdulal/SmartPrice'
        },
        {
            title: 'Machine Learning',
            text: 'My first time experimenting with Machine Learning and neural networks! In the project, I implemented a binary perceptron, then started to work with non-linear regression techniques, implementing a neural network to approximate sin(x) over a period, to classify handwritten digits from the MNIST dataset, and to identify the language of a given piece of text. I had a lot of fun working with neural networks and I hope to continue this work in the future!',
            image: 'assets/img/ml.png',
            link: 'https://github.com/arhubdulal/Machine-Learning'
        },
        {
            title: 'This Website',
            text: 'This very site stands as a project! I intend to showcase the design skills that I have, as well as highlight some of the things I have done and picked up over time. The usual elements of front-end development are involved—HTML, CSS and JavaScript. Such libraries and frameworks as jQuery and AngularJS are used for some animations and conveniences. Of course, the site is technically always a work in progress since I will document projects and other things to come.',
            image: 'assets/img/this.png',
            link: 'https://github.com/arhubdulal/arhubdulal.github.io',
        },
        {
            title: 'Roguelike Game',
            text: 'I made a randomly generated game on Java, with functioning enemies and objects and a save file!  Although this was given as a class project, I had to design everything from scratch—no skeleton code or anything like that. Another thing was that I had to write all the tests by myself. All these things were definitely non-trivial and the project was relatively large. Certainly, this was one of the most challenging projects I have done to date.',
            image: 'assets/img/upe.png',
            link: 'https://github.com/arhubdulal/Rogue-like-Game'
        },
        {
            title: 'Animated Solar System',
            text: 'Modeled the gravitational orbit of asteroids and planets around the Sun using Keplers law and implemented collision detection. Used standard libraries to create animations. As this was a very early project of mine, I became familiar with Object oriented programming and the nuances of animation. I wrote all the tests by myself. I liked this project in particular because I could see the output of my code as a long animation.',
            image: 'assets/img/oppia.png',
            link: 'https://github.com/arhubdulal/Animated-Solar-System'
        },
        {
            title: "Multi Agent Search",
            text: "This project stands to be my first application of Artificial Intelligence! I designed Pacman agents including ghosts that function off minimax search, expectimax search, and alpha beta pruning. I designed a more efficient evaluation function as well. During the process of coding this project, I learned how AI fundamentally works, and how many things actually require AI to work. This definitely was fun, as I could see pacman working to maximize its utility whilst the ghosts tried to minimize, and I could watch the battle unfold!",
            image: 'assets/img/search.png',
            link: 'https://github.com/arhubdulal/Multi-Agent-Search'
        },
    ];
    $scope.interests =
    [
        {
            name: 'The Verge',
            text: 'One of the top sites to go to for technology news. Been following it since it was "This is my Next".',
            link: 'http://www.theverge.com/',
            image: 'assets/img/theverge.png'
        },
        {
            name: 'MacRumors',
            text: 'Good source of news about Apple-related things. Forums are useful, too. Discovered it during a history day project years ago.',
            link: 'http://www.macrumors.com/',
            image: 'assets/img/macrumors.png'
        },
        {
            name: 'NBA',
            text: 'Huge NBA fan! Played basketball for all of my life, my favorite player is Russell Westbrook and my team is now the Houston Rockets!',
            link: 'http://nba.com/',
            image: 'assets/img/NBA.png'
        },
        {
            name: 'IGN',
            text: 'The reviews that IGN gives on my favorite shows (like Arrow and Flash) are places for interesting discussions.',
            link: 'http://www.ign.com/',
            image: 'assets/img/ign.png'
        }
    ];
}]);
