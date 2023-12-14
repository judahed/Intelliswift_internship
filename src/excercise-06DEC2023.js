const companies = [
    {name: 'Intelliswift', hq: 'Newyork, CA', indiaLocations: ['Pune', 'Bengaluru']},
    {name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur']}
  ];
// Task1
console.log('Number of Companies :',companies.length);

for (let i=0; i<companies.length;i++){
  let company = companies[i];
  console.log(i+': Name of company :', company.name +', Headquarters :', company.hq);
}

// Task2
function showMessage(){
  const companyInfoDiv = document.getElementById('companyInformation');
  let outputHtmlSnippet='';
  outputHtmlSnippet += '<h3>Number of companies'+companies.length +'</h3>';
  outputHtmlSnippet += '<ol>';
  for (let i=0; i<companies.length;i++){
    let company = companies[i];
    outputHtmlSnippet += '<li>'+ company.name +' - '+ company.hq + ' - ' + company.indiaLocations.join(', ') +'</li>';
  }
  outputHtmlSnippet += '</ol>';
  companyInfoDiv.innerHTML= outputHtmlSnippet;
}

