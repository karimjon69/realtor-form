let buyingQuestions = [
  { 
    type: 'radio', 
    verbiage: 'What type of home are you looking to buy?',
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
]

let contactQuestions = [
  {
    type: 'input',
    verbiage: 'First Name'
  },
  {
    type: 'input',
    verbiage: 'Last Name'
  }, 
  {
    type: 'input',
    verbiage: 'Phone Number'
  },
  {
    type: 'input',
    verbiage: 'Email Address'
  }
]

export {
  contactQuestions, 
  buyingQuestions,
}