import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Kibana dashboard",
    'href': "https://dashboard.djc.cloud",
    'desc': "VPC Flow Log Analysis with the ELK Stack on logz.io",
    'image': {
      'desc': "screen shot of the kibana dashboard",
      'src': "images/kibana1.png",
      'comment': ""
    }
  },
  {
    'title': "Jira Dashboard",
    'href': "https://jira.djc.cloud",
    'desc': "My jira dashboard tracking this Portfolio",
    'image': {
      'desc': "My jira dashboard tracking this Portfolio",
      'src': "images/jira.png",
      'comment': ""
    }
  },
  {
    'title': "Portfolio Architecture Info",
    'href': "https://example.com",
    'desc': "This is the architecture of this Portfolio",
    'image': {
      'desc': "screnn shot of the architecture",
      'src': "images/architecture.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
