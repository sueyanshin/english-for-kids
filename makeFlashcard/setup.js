//create sample decks with some cards (if not already in localstorage)

flashcards.openDeck("100");
if (!flashcards.deckLength()) {
  flashcards.setDisplayName("foods in english");
  flashcards.addCards(
    ["နွားနို့", "milk"],
    ["ပေါင်မုန့်", "bread"],
    ["ဆွတ်ပြုတ်", "soup"],
    ["ထောပတ်", "butter"],
    ["ချိစ်", "cheese"],
    ["ချောကလပ်", "chocolate"],
    ["မုန်လာဉနီ", "carrots"],
    ["ပဲ", "beans"],
    ["ပေါင်မုန့်ကင်", "toast"],
    ["ခရမ်းချဉ်သီး", "tomatoes"],
    ["ဆား", "salt"],
    // [ ["pubr", "pubur"],"pepper"],
    ["ကော်ဖီ", "coffee"]
  );
}

// flashcards.openDeck('300');
// if (!flashcards.deckLength()) {
//   flashcards.setDisplayName('AWS acronyms'),
//   flashcards.addCards(
//     ['IAM', ["Identity and Access Management", "Identity Access Management"]],
//     ['VPC', 'Virtual Private Cloud'],
//     ['CloudHSM', ["Cloud Hardware Security Module", "Hardware Security Module", "CloudHardware Security Module"]],
//     ['WAF', 'Web Application Firewall'],
//     ['EC2', 'Elastic Compute Cloud'],
//     ['SWF', 'Simple Workflow Service'],
//     ['EFS', 'Elastic File System'],
//     ['S3', 'Simple Storage Service'],
//     ['MQ', 'Message Queue'],
//     ['RTOS', ['Real Time Operating System', 'Real-time Operating System']],
//     ['EMR', ["Elastic MapReduce", "Elastic Map Reduce"]]);
// }
