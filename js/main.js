import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "Kibana dashboard",
    'href': "http://dashboard.djc.cloud",
    'desc': "VPC Flow Log Analysis with the ELK Stack on logz.io, Logz.io is an AI-powered log analysis platform that offers the open source ELK Stack as a cloud service with machine learning technology and can be used for IT infrastructure and application monitoring, DevOps, business intelligence, and more",
    'image': {
      'desc': "screen shot of the kibana dashboard",
      'src': "images/kibana1.png",
      'comment': ""
    }
  },
  {
    'title': "Jira Dashboard",
    'href': "http://jira.djc.cloud",
    'desc': "My jira project tracking this portfolio, A JIRA project is a collection of issues. Your team could use a JIRA project to coordinate the development of a product, track a project, manage a help desk, and more, depending on your requirements. A JIRA project can also be configured and customized to suit the needs of you and your team",
    'image': {
      'desc': "My jira dashboard tracking this Portfolio",
      'src': "images/jira.png",
      'comment': ""
    }
  },
  {
    'title': "Portfolio Architecture Info",
    'href': "https://github.com/darran-curant/my-portfolio/blob/master/images/architecture.PNG",
    'desc': "This is the architecture of this Portfolio",
    'image': {
      'desc': "screnn shot of the architecture",
      'src': "images/architecture.PNG",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
