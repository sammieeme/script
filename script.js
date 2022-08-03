function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    dayInfo: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    dailyWisdom: ['be careful who you meet on your way up because you might meet them on your way down', 'a night of passion can cause you a lifetime of pain', 'a stitch in time saves nine', 'always listen to your elders because what they can see sitting down you cannot see standing up', 'there is a thin line between love and hate', 'all that glitters is not gold', 'learn to walk before you learn to run'],
    advice: ['be kind to people today', 'be careful with the decisions you make today', 'be thorough in all you do today', 'listen to people with more experience in life than you do today', 'choose love instead of hate in all you do today', 'be careful of the fancy things you see today because things do not always appear as they seem', 'be patient in all you do today']
}

// Store the 'wisdom' in an array
let personalWisdom = []

//Iterate over the object
for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    // use the object's properties to customize the message being added to personalWisdom
    switch(prop) {
        case 'dayInfo':
            personalWisdom.push(`Today is a "${collectiveWisdom[prop] [optionIdx]}".`)
            break
        case 'dailyWisdom':
            personalWisdom.push(`Take it from me: "${collectiveWisdom[prop] [optionIdx]}".`)
            break
        case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[prop] [optionIdx]}".`)
            break
        default:
            personalWisdom.push('No info available.')

    }
}

function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? Like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);