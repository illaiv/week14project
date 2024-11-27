const mmos = [
{
    game_name: "Runescape",
    game_publisher: "Jagex Studios",
    release_date: "January 4, 2002",
    game_rating: "13+",
    game_review: "4/5",
    esports_review: "Light, Casual",
    free_to_play: "Yes, Membership option",

},
{
    game_name: "GW2",
    game_publisher: "ArenaNet",
    release_date: "August 28, 2012",
    game_rating: "13+",
    game_review: "4.4/5",
    esports_review: "Casual",
    free_to_play: "Yes",

},
{
    game_name: "WoW",
    game_publisher: "Blizzard",
    release_date: "November 23, 2004",
    game_rating: "13+",
    game_review: "4.5/5",
    esports_review: "Casual/Competitive world tournaments",
    free_to_play: "No",

},
{
    game_name: "FF14",
    game_publisher: "Square Enix",
    release_date: "August 27, 2013",
    game_rating: "13+",
    game_review: "4.2/5",
    esports_review: "Casual friendly",
    free_to_play: "No",

},

];
const mobas = [

    {
        game_name: "Dota",
        game_publisher: "Valve",
        release_date: "July 9, 2013",
        game_rating: "18+",
        game_review: "4.3/5",
        esports_review: "Competitive",
        free_to_play: "Yes",
    },

    {
        game_name: "LoL",
        game_publisher: "Riot Games",
        release_date: "October 27, 2009",
        game_rating: "13+",
        game_review: "2.9/5",
        esports_review: "Highest level, world events",
        free_to_play: "Yes",

    },
    {
        game_name: "Smite",
        game_publisher: "Hi-Rez",
        release_date: "March 25, 2014",
        game_rating: "13+",
        game_review: "3.0/5",
        esports_review: "Competitive, tournaments",
        free_to_play: "Yes",

    },
    {
        game_name: "HOTS",
        game_publisher: "Blizzard",
        release_date: "June 2, 2015",
        game_rating: "13+",
        game_review: "3.6/5",
        esports_review: "Casual friendly, competitive",
        free_to_play: "Yes",

    },
];

const fps = [
    {
        game_name: "Valorant",
        game_publisher: "Riot Games",
        release_date: "June 2, 2020",
        game_rating: "16+",
        game_review: "3.7/5",
        esports_review: "Very competitive",
        free_to_play: "Yes",
    
    },
    {
        game_name: "CS2",
        game_publisher: "Valve",
        release_date: "September 27, 2023",
        game_rating: "17+",
        game_review: "2.2/5",
        esports_review: "Very competitive",
        free_to_play: "Yes",
    
    },
    {
        game_name: "CoD",
        game_publisher: "Activision",
        release_date: "October 25, 2024",
        game_rating: "18+",
        game_review: "2.4/5",
        esports_review:"Competitive",
        free_to_play: "No",
    
    },
    {
        game_name: "Overwatch",
        game_publisher: "Blizzard",
        release_date: "May 24, 2016",
        game_rating: "13+",
        game_review: "3.8/5",
        esports_review: "Slightly competitive",
        free_to_play: "Yes",
    
    },
];

const getAllMmosAPI = () => {
    return mmos;
  };
  
  const getAllMobasAPI = () => {
    return mobas;
  };

  const getAllFpsAPI = () => {
    return fps;
  };
  

  