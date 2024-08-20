<h3>Prerequisites</h3>
<p>Node.js and npm</p>
<h2>Steps to Run the Application Locally</h2>
<ol>
        <li>Clone the Repository</li>
        <li>Install Dependencies
            <pre><code>npm install</code></pre>
        </li>
        <li>Create a JSON File for Widgets
          <pre><code>
                  {
                    "categories": [
                      {
                        "id": 1,
                        "name": "CSPM Executive Dashboard",
                        "widgets": [
                          { "id": 1, "name": "Cloud Accounts", "description": "Displays connected cloud accounts", "type": "PieChart" },
                          { "id": 2, "name": "Cloud Account Risk Assessment", "description": "Shows risk assessments for cloud accounts", "type": "DonutChart" }
                        ]
                      },
                      {
                        "id": 2,
                        "name": "Another Dashboard",
                        "widgets": [
                          { "id": 3, "name": "Image Risk Assessment", "description": "Shows image vulnerabilities", "type": "BarChart" }
                        ]
                      }
                    ]
                  }
    </code></pre>
        </li>
        <li>Start the Development Server
        <pre><code>npm run dev</code><br><p>then (ctrl + click) on local:</p></pre>
        </li>
</ol>
