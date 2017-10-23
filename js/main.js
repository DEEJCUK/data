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
      'src': "images/kibana.PNG",
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
    'desc': "This is the architecture of this Portfolio, it uses multiple technolgies and programming techniques, The course was provided by "A Cloud Gurus" online system.",
    'image': {
      'desc': "screen shot of the architecture",
      'src': "images/portfolio_architecture.PNG",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified SysOps Administrator - Associate Certification",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=3&t=c&d=2017-09-16&ci=AWS00226099",
    'desc': "This is a link to my AWS Sysops Certification page",
    'image': {
      'desc': "AWS SYSOPS CERT",
      'src': "images/awssysops.png",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified Developer - Associate Certification",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2017-03-17&ci=AWS00226099",
    'desc': "This is a link to my AWS Developer Certification page",
    'image': {
      'desc': "AWS DEV CERT",
      'src': "images/awsdev.png",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified Solutions Architect - Associate Certification",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-02-28&ci=AWS00226099",
    'desc': "This is a link to my AWS Solutions Architect Certification page",
    'image': {
      'desc': "AWS SAA CERT",
      'src': "images/awssaa.png",
      'comment': ""
    }
  },
  {
    'title': "Redhat Certification",
    'href': "https://www.redhat.com/rhtapps/certification/badge/verify/FYF2KTIEIHRIBC6TC5QAFMH5XEAEQU3CUPSQX2KSDXT6RW46LQ37ULE25V3KCXMMFRIX6PMBNQZGA4U5NQYTCNA62RUWOCM34WWBUYQ%3D/",
    'desc': "This is a link to my Redhat Certification page",
    'image': {
      'desc': "RHCSA CERT",
      'src': "images/rhcsa.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
