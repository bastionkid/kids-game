import { Question, GameCategory } from '../types/game';

export const questionsData: Record<GameCategory, Question[]> = {
  [GameCategory.NUMBERS]: [
    {
      id: 1,
      text: "What comes after 5?",
      options: ["4", "6", "7", "8"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 2,
      text: "Which number is the biggest?",
      options: ["3", "9", "1", "5"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 3,
      text: "How many fingers do you have on one hand?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      category: GameCategory.NUMBERS
    },
    {
      id: 4,
      text: "What comes before 3?",
      options: ["1", "2", "4", "5"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 5,
      text: "Count the stars: ⭐⭐⭐",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 6,
      text: "Which number comes between 7 and 9?",
      options: ["6", "8", "10", "11"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 7,
      text: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 8,
      text: "Count the hearts: ❤️❤️❤️❤️❤️❤️❤️",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 9,
      text: "Which number is the smallest?",
      options: ["8", "1", "5", "3"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 10,
      text: "What is 5 - 2?",
      options: ["2", "3", "4", "7"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 11,
      text: "How many wheels does a bicycle have?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 12,
      text: "Count the dots: • • • • • • • • • •",
      options: ["9", "10", "11", "12"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 13,
      text: "What comes after 10?",
      options: ["9", "11", "12", "13"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 14,
      text: "Which number is even?",
      options: ["3", "4", "5", "7"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 15,
      text: "What is 3 + 1?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 16,
      text: "Count the balloons: 🎈🎈🎈🎈🎈🎈",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 17,
      text: "What comes before 10?",
      options: ["8", "9", "11", "12"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 18,
      text: "Which number is odd?",
      options: ["2", "3", "4", "6"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 19,
      text: "What is 4 + 3?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 20,
      text: "Count the flowers: 🌸🌸🌸🌸",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 21,
      text: "What is 10 - 3?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 22,
      text: "How many days are in a week?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 23,
      text: "Which number comes between 4 and 6?",
      options: ["3", "5", "7", "8"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 24,
      text: "What is 6 + 2?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 25,
      text: "Count the apples: 🍎🍎🍎🍎🍎🍎🍎🍎",
      options: ["7", "8", "9", "10"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 26,
      text: "What is 9 - 4?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 27,
      text: "Which number is greater than 8?",
      options: ["7", "9", "6", "5"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 28,
      text: "What is 5 + 4?",
      options: ["8", "9", "10", "11"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 29,
      text: "Count the cookies: 🍪🍪🍪🍪🍪🍪🍪🍪🍪",
      options: ["8", "9", "10", "11"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    },
    {
      id: 30,
      text: "What is 8 - 3?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      category: GameCategory.NUMBERS
    }
  ],
  [GameCategory.VEGETABLES]: [
    {
      id: 31,
      text: "Which one is a vegetable?",
      options: ["🍎", "🥕", "🍌", "🍇"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 32,
      text: "What color is a tomato?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 33,
      text: "Which vegetable is orange?",
      options: ["Broccoli", "Carrot", "Lettuce", "Potato"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 34,
      text: "What vegetable makes you cry when you cut it?",
      options: ["Potato", "Onion", "Carrot", "Cabbage"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 35,
      text: "Which vegetable is green and looks like a tree?",
      options: ["Carrot", "Broccoli", "Potato", "Beet"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 36,
      text: "What color is lettuce?",
      options: ["Red", "Green", "Purple", "Orange"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 37,
      text: "Which vegetable is long and orange?",
      options: ["Onion", "Carrot", "Radish", "Turnip"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 38,
      text: "What vegetable is used to make french fries?",
      options: ["Carrot", "Potato", "Beet", "Turnip"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 39,
      text: "Which vegetable is purple?",
      options: ["Carrot", "Eggplant", "Cabbage", "Lettuce"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 40,
      text: "What vegetable grows underground?",
      options: ["Broccoli", "Potato", "Spinach", "Kale"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 41,
      text: "Which one is a leafy green vegetable?",
      options: ["Carrot", "Spinach", "Radish", "Beet"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 42,
      text: "What color is a cucumber?",
      options: ["Red", "Green", "Yellow", "Purple"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 43,
      text: "Which vegetable is red?",
      options: ["Lettuce", "Tomato", "Cucumber", "Cabbage"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 44,
      text: "What vegetable is white and round?",
      options: ["Carrot", "Onion", "Broccoli", "Spinach"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 45,
      text: "Which vegetable has layers?",
      options: ["Potato", "Onion", "Carrot", "Radish"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 46,
      text: "What vegetable is yellow?",
      options: ["Broccoli", "Corn", "Lettuce", "Spinach"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 47,
      text: "Which vegetable grows on a vine?",
      options: ["Potato", "Cucumber", "Carrot", "Beet"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 48,
      text: "What vegetable is crunchy and orange?",
      options: ["Lettuce", "Carrot", "Spinach", "Kale"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 49,
      text: "Which vegetable makes good soup?",
      options: ["Lettuce", "Tomato", "Spinach", "Cabbage"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 50,
      text: "What vegetable is used in salads?",
      options: ["Potato", "Lettuce", "Onion", "Beet"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 51,
      text: "Which vegetable is small and red?",
      options: ["Cucumber", "Radish", "Lettuce", "Cabbage"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 52,
      text: "What vegetable has seeds inside?",
      options: ["Carrot", "Tomato", "Onion", "Potato"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 53,
      text: "Which vegetable is good for your eyes?",
      options: ["Onion", "Carrot", "Cabbage", "Beet"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 54,
      text: "What vegetable grows in pods?",
      options: ["Tomato", "Peas", "Carrot", "Onion"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 55,
      text: "Which vegetable is white inside?",
      options: ["Carrot", "Potato", "Beet", "Radish"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 56,
      text: "What vegetable grows tall with leaves?",
      options: ["Radish", "Celery", "Onion", "Beet"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 57,
      text: "Which vegetable is used to make pickles?",
      options: ["Tomato", "Cucumber", "Carrot", "Lettuce"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 58,
      text: "What vegetable is green and round?",
      options: ["Carrot", "Cabbage", "Tomato", "Onion"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 59,
      text: "Which vegetable has a strong smell?",
      options: ["Lettuce", "Onion", "Cucumber", "Cabbage"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    },
    {
      id: 60,
      text: "What vegetable is sweet and orange?",
      options: ["Onion", "Sweet Potato", "Lettuce", "Cabbage"],
      correctAnswer: 1,
      category: GameCategory.VEGETABLES
    }
  ],
  [GameCategory.FRUITS]: [
    {
      id: 61,
      text: "Which one is a fruit?",
      options: ["🥕", "🍎", "🥬", "🥔"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 62,
      text: "What color is a banana?",
      options: ["Red", "Yellow", "Blue", "Purple"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 63,
      text: "Which fruit is red?",
      options: ["Orange", "Apple", "Lemon", "Lime"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 64,
      text: "What fruit is orange and round?",
      options: ["Apple", "Orange", "Grape", "Cherry"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 65,
      text: "Which fruit grows on trees?",
      options: ["Strawberry", "Apple", "Watermelon", "Pineapple"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 66,
      text: "What fruit is green outside and red inside?",
      options: ["Apple", "Watermelon", "Orange", "Banana"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 67,
      text: "Which fruit is small and purple?",
      options: ["Orange", "Grape", "Apple", "Pear"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 68,
      text: "What fruit has seeds on the outside?",
      options: ["Apple", "Strawberry", "Orange", "Peach"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 69,
      text: "Which fruit is yellow and curved?",
      options: ["Apple", "Banana", "Orange", "Grape"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 70,
      text: "What fruit is fuzzy outside?",
      options: ["Apple", "Peach", "Orange", "Grape"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 71,
      text: "Which fruit is sour and yellow?",
      options: ["Apple", "Lemon", "Orange", "Cherry"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 72,
      text: "What fruit grows in bunches?",
      options: ["Apple", "Grapes", "Orange", "Peach"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 73,
      text: "Which fruit has a big seed inside?",
      options: ["Grape", "Avocado", "Cherry", "Berry"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 74,
      text: "What fruit is green and sour?",
      options: ["Apple", "Lime", "Orange", "Peach"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 75,
      text: "Which fruit is very big and heavy?",
      options: ["Cherry", "Watermelon", "Grape", "Berry"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 76,
      text: "What fruit is sweet and has a crown?",
      options: ["Apple", "Pineapple", "Orange", "Pear"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 77,
      text: "Which fruit is small and red?",
      options: ["Orange", "Cherry", "Banana", "Lime"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 78,
      text: "What fruit rhymes with 'hair'?",
      options: ["Apple", "Pear", "Orange", "Grape"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 79,
      text: "Which fruit can be made into juice easily?",
      options: ["Coconut", "Orange", "Avocado", "Kiwi"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 80,
      text: "What fruit has brown fuzzy skin?",
      options: ["Apple", "Kiwi", "Orange", "Grape"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 81,
      text: "Which fruit grows low to the ground?",
      options: ["Apple", "Strawberry", "Orange", "Pear"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 82,
      text: "What fruit is tropical and yellow inside?",
      options: ["Apple", "Mango", "Orange", "Cherry"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 83,
      text: "Which fruit has milk inside?",
      options: ["Apple", "Coconut", "Orange", "Pear"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 84,
      text: "What fruit is dried to make raisins?",
      options: ["Apple", "Grapes", "Orange", "Peach"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 85,
      text: "Which fruit keeps the doctor away?",
      options: ["Orange", "Apple", "Banana", "Grape"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 86,
      text: "What fruit is heart-shaped?",
      options: ["Apple", "Strawberry", "Orange", "Pear"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 87,
      text: "Which fruit has segments inside?",
      options: ["Apple", "Orange", "Banana", "Peach"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 88,
      text: "What fruit is used to make guacamole?",
      options: ["Tomato", "Avocado", "Lime", "Onion"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 89,
      text: "Which fruit grows in the desert?",
      options: ["Apple", "Cactus Fruit", "Orange", "Grape"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    },
    {
      id: 90,
      text: "What fruit is often green when unripe?",
      options: ["Orange", "Banana", "Grape", "Cherry"],
      correctAnswer: 1,
      category: GameCategory.FRUITS
    }
  ],
  [GameCategory.VEHICLES]: [
    {
      id: 91,
      text: "Which one flies in the sky?",
      options: ["🚗", "✈️", "🚢", "🚂"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 92,
      text: "What has four wheels?",
      options: ["Airplane", "Car", "Boat", "Bicycle"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 93,
      text: "Which vehicle travels on water?",
      options: ["Train", "Truck", "Boat", "Bus"],
      correctAnswer: 2,
      category: GameCategory.VEHICLES
    },
    {
      id: 94,
      text: "What vehicle has two wheels?",
      options: ["Car", "Bicycle", "Truck", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 95,
      text: "Which vehicle runs on tracks?",
      options: ["Car", "Train", "Boat", "Airplane"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 96,
      text: "What vehicle takes you to school?",
      options: ["Airplane", "School Bus", "Boat", "Helicopter"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 97,
      text: "Which vehicle helps sick people?",
      options: ["Police Car", "Ambulance", "Fire Truck", "Taxi"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 98,
      text: "What vehicle puts out fires?",
      options: ["Ambulance", "Fire Truck", "Police Car", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 99,
      text: "Which vehicle has a ladder?",
      options: ["Car", "Fire Truck", "Bicycle", "Boat"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 100,
      text: "What vehicle has wings?",
      options: ["Car", "Airplane", "Train", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 101,
      text: "Which vehicle has a propeller?",
      options: ["Car", "Helicopter", "Train", "Bicycle"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 102,
      text: "What vehicle carries lots of people?",
      options: ["Bicycle", "Bus", "Motorcycle", "Scooter"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 103,
      text: "Which vehicle has a siren?",
      options: ["Bicycle", "Police Car", "Regular Car", "Skateboard"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 104,
      text: "What vehicle carries heavy things?",
      options: ["Bicycle", "Truck", "Scooter", "Skateboard"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 105,
      text: "Which vehicle has pedals?",
      options: ["Car", "Bicycle", "Train", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 106,
      text: "What vehicle takes you to the airport?",
      options: ["Boat", "Taxi", "Train", "Helicopter"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 107,
      text: "Which vehicle has a horn?",
      options: ["Skateboard", "Car", "Bicycle", "Scooter"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 108,
      text: "What vehicle goes underwater?",
      options: ["Car", "Submarine", "Airplane", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 109,
      text: "Which vehicle has sails?",
      options: ["Car", "Sailboat", "Train", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 110,
      text: "What vehicle is yellow and takes kids to school?",
      options: ["Taxi", "School Bus", "Fire Truck", "Ambulance"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 111,
      text: "Which vehicle has tracks instead of wheels?",
      options: ["Car", "Tank", "Bicycle", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 112,
      text: "What vehicle delivers mail?",
      options: ["Fire Truck", "Mail Truck", "Ambulance", "Police Car"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 113,
      text: "Which vehicle has three wheels?",
      options: ["Car", "Tricycle", "Bicycle", "Bus"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 114,
      text: "What vehicle do astronauts use?",
      options: ["Car", "Rocket", "Boat", "Train"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 115,
      text: "Which vehicle collects garbage?",
      options: ["School Bus", "Garbage Truck", "Fire Truck", "Ambulance"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 116,
      text: "What vehicle has very big wheels?",
      options: ["Bicycle", "Monster Truck", "Scooter", "Skateboard"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 117,
      text: "Which vehicle can drive on sand?",
      options: ["Regular Car", "Dune Buggy", "Train", "Boat"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 118,
      text: "What vehicle has flashing lights?",
      options: ["Regular Car", "Police Car", "Bicycle", "Skateboard"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 119,
      text: "Which vehicle carries cars?",
      options: ["Bus", "Car Carrier", "Train", "Boat"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    },
    {
      id: 120,
      text: "What vehicle do farmers use?",
      options: ["Sports Car", "Tractor", "Bicycle", "Motorcycle"],
      correctAnswer: 1,
      category: GameCategory.VEHICLES
    }
  ],
  [GameCategory.COLORS]: [
    {
      id: 121,
      text: "What color do you get when you mix red and blue?",
      options: ["Green", "Purple", "Orange", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 122,
      text: "What color is the sun?",
      options: ["Blue", "Yellow", "Red", "Green"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 123,
      text: "What color is grass?",
      options: ["Green", "Blue", "Red", "Purple"],
      correctAnswer: 0,
      category: GameCategory.COLORS
    },
    {
      id: 124,
      text: "What color do you get when you mix yellow and red?",
      options: ["Purple", "Orange", "Green", "Blue"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 125,
      text: "What color is the sky?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 126,
      text: "What color do you get when you mix blue and yellow?",
      options: ["Purple", "Green", "Orange", "Red"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 127,
      text: "What color is snow?",
      options: ["Black", "White", "Gray", "Blue"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 128,
      text: "What color is coal?",
      options: ["White", "Black", "Gray", "Brown"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 129,
      text: "What color is chocolate?",
      options: ["Blue", "Brown", "Green", "Purple"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 130,
      text: "What color is a stop sign?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 131,
      text: "What color means 'go' on a traffic light?",
      options: ["Red", "Green", "Yellow", "Blue"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 132,
      text: "What color means 'caution' on a traffic light?",
      options: ["Red", "Yellow", "Green", "Blue"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 133,
      text: "What color is a flamingo?",
      options: ["Blue", "Pink", "Green", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 134,
      text: "What color are most leaves in summer?",
      options: ["Red", "Green", "Yellow", "Brown"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 135,
      text: "What color are most leaves in fall?",
      options: ["Green", "Orange", "Blue", "Purple"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 136,
      text: "What color is an elephant?",
      options: ["Blue", "Gray", "Green", "Red"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 137,
      text: "What color is a zebra?",
      options: ["All red", "Black and white", "All blue", "All green"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 138,
      text: "What color is the ocean?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 139,
      text: "What color is a school bus?",
      options: ["Red", "Yellow", "Green", "Blue"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 140,
      text: "What color do you get when you mix all colors?",
      options: ["White", "Black", "Gray", "Brown"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 141,
      text: "What color is a tiger?",
      options: ["Blue", "Orange and black", "All green", "All red"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 142,
      text: "What color is milk?",
      options: ["Yellow", "White", "Blue", "Green"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 143,
      text: "What color is a frog?",
      options: ["Red", "Green", "Blue", "Purple"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 144,
      text: "What color is a fire truck?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 145,
      text: "What color is cotton candy usually?",
      options: ["Blue", "Pink", "Green", "Brown"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 146,
      text: "What color is a taxi usually?",
      options: ["Red", "Yellow", "Green", "Purple"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 147,
      text: "What color is a polar bear?",
      options: ["Brown", "White", "Black", "Gray"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 148,
      text: "What color are clouds on a sunny day?",
      options: ["Gray", "White", "Blue", "Yellow"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 149,
      text: "What color is a basketball?",
      options: ["Blue", "Orange", "Green", "Red"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    },
    {
      id: 150,
      text: "What color is a peacock's tail?",
      options: ["Red", "Blue and green", "All yellow", "All black"],
      correctAnswer: 1,
      category: GameCategory.COLORS
    }
  ],
  [GameCategory.SHAPES]: [
    {
      id: 151,
      text: "Which shape has 3 sides?",
      options: ["Square", "Triangle", "Circle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 152,
      text: "Which shape is round?",
      options: ["Triangle", "Circle", "Square", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 153,
      text: "How many sides does a square have?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 154,
      text: "Which shape has 4 equal sides?",
      options: ["Triangle", "Square", "Circle", "Oval"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 155,
      text: "How many sides does a triangle have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 156,
      text: "Which shape has no sides?",
      options: ["Square", "Circle", "Triangle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 157,
      text: "What shape is a ball?",
      options: ["Square", "Circle", "Triangle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 158,
      text: "How many sides does a rectangle have?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 159,
      text: "Which shape has 5 sides?",
      options: ["Triangle", "Pentagon", "Square", "Circle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 160,
      text: "Which shape has 6 sides?",
      options: ["Triangle", "Hexagon", "Square", "Circle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 161,
      text: "What shape is a book?",
      options: ["Circle", "Rectangle", "Triangle", "Star"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 162,
      text: "What shape is a wheel?",
      options: ["Square", "Circle", "Triangle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 163,
      text: "Which shape has 8 sides?",
      options: ["Triangle", "Octagon", "Square", "Circle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 164,
      text: "What shape is a stop sign?",
      options: ["Circle", "Octagon", "Square", "Triangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 165,
      text: "Which shape is like a squashed circle?",
      options: ["Square", "Oval", "Triangle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 166,
      text: "What shape has points like a star?",
      options: ["Circle", "Star", "Square", "Oval"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 167,
      text: "Which shape has 4 sides but not all equal?",
      options: ["Circle", "Rectangle", "Triangle", "Star"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 168,
      text: "What shape is a pizza slice?",
      options: ["Square", "Triangle", "Circle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 169,
      text: "Which shape has the most sides?",
      options: ["Triangle", "Octagon", "Square", "Pentagon"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 170,
      text: "What shape is an egg?",
      options: ["Square", "Oval", "Triangle", "Star"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 171,
      text: "Which shape has all angles the same?",
      options: ["Triangle", "Square", "Rectangle", "Oval"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 172,
      text: "What shape is a window usually?",
      options: ["Triangle", "Rectangle", "Circle", "Star"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 173,
      text: "Which shape has corners?",
      options: ["Circle", "Square", "Oval", "Sphere"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 174,
      text: "What shape is the sun drawn as?",
      options: ["Square", "Circle", "Triangle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 175,
      text: "Which shape has the fewest sides?",
      options: ["Square", "Triangle", "Pentagon", "Hexagon"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 176,
      text: "What shape is a house roof usually?",
      options: ["Circle", "Triangle", "Square", "Oval"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 177,
      text: "Which shape has curved edges?",
      options: ["Square", "Circle", "Triangle", "Rectangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 178,
      text: "What shape is a diamond?",
      options: ["Circle", "Diamond", "Square", "Triangle"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 179,
      text: "Which shape has straight lines only?",
      options: ["Circle", "Square", "Oval", "Sphere"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    },
    {
      id: 180,
      text: "What shape is most like a box?",
      options: ["Circle", "Rectangle", "Triangle", "Star"],
      correctAnswer: 1,
      category: GameCategory.SHAPES
    }
  ]
};