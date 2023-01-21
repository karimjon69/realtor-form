let contactQuestions = [
  {
    type: 'input',
    verbiage: 'Email Address',
    subVerbiage: 'Where should we email your list?'
  },
  {
    type: 'input',
    verbiage: 'Name',
    subVerbiage: 'Your full name or your pet name you want us to adress with'
  },
  {
    type: 'input',
    verbiage: 'Phone Number',
    subVerbiage: 'A good number to contact you'
  },
];

let buyingQuestions = [
  { 
    type: 'radio', 
    verbiage: 'What type of home are you looking to buy?',
    subVerbiage: 'These questions help us rank agents to suit your needs.',
    options: [
      'Single Family', 'Condo', 'Mobile Home', 'Commercial'
    ]
  }, 
  {
    type: 'radio',
    verbiage: 'How soon would you like to buy?',
    options: [
      'ASAP', '1-3 Months', '3-6 Months', '12+ Months'
    ]
  },
  {
    type: 'radio',
    verbiage: `What's your price range?`,
    options: [
      '$50,000 to $150,000', '$150,000 to $350,000', '$350,000 to $1,000,000', 'Over $1,000,000' 
    ]
  }, 
  {
    type: 'input',
    verbiage: 'What state are you buying in?'
  }, 
  {
    type: 'input',
    verbiage: 'Ideally, what city?'
  },
];

let sellingQuestions = [
  {
    type: 'radio',
    verbiage: "Type of home you're selling?",
    subVerbiage: 'These questions help us rank agents to suit your needs.',
    options: [
      'Single Family', 'Condo', 'Mobile Home', 'Commercial'
    ]
  },
  {
    type: 'radio',
    verbiage: 'When would you like to sell?',
    options: [
      'ASAP', '1-3 Months', '3-6 Months', '12+ Months'
    ]
  },
  {
    type: 'radio',
    verbiage: `What's your ideal selling price?`,
    options: [
      '$50,000 to $150,000', '$150,000 to $350,000', '$350,000 to $1,000,000', 'Over $1,000,000' 
    ]
  }, 
  {
    type: 'input',
    verbiage: 'Property Zip Code',
    subVerbiage: 'Just a 5 Digit Zip Code'
  },
  {
    type: 'input',
    verbiage: 'Property Address',
    subVerbiage: 'Just a House Number & Street Name'
  },
]

buyingQuestions = buyingQuestions.concat(contactQuestions);
sellingQuestions = sellingQuestions.concat(contactQuestions);

export {
  buyingQuestions,
  sellingQuestions,
}