// Fetch data from the API endpoint
fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(response => response.json())
    .then(data => {
        // Process the data and generate HTML content
        const summary = data.data.summary;
        const regionalData = data.data.regional;

        let html = `
          <h1>COVID-19 Summary</h1>
          <p>Total Cases: ${summary.total}</p>
          <p>Total Indian Cases: ${summary.confirmedCasesIndian}</p>
          <p>Total Foreign Cases: ${summary.confirmedCasesForeign}</p>
          <p>Total Discharged: ${summary.discharged}</p>
          <p>Total Deaths: ${summary.deaths}</p>
      `;

        html += '<h2>Regional Data</h2>';
        html += '<ul class="grid">';
        regionalData.forEach(region => {
            html += `
              <li>
                  <strong>${region.loc}</strong><br>
                  Confirmed Cases Indian: ${region.confirmedCasesIndian}<br>
                  Confirmed Cases Foreign: ${region.confirmedCasesForeign}<br>
                  Discharged: ${region.discharged}<br>
                  Deaths: ${region.deaths}<br>
                  Total Confirmed: ${region.totalConfirmed}
              </li>
          `;
        });
        html += '</ul>';

        // Update the HTML content
        document.getElementById('data-container').innerHTML = html;
    })
    .catch(error => console.error('Error fetching data:', error));