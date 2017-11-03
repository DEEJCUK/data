import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "VPC Kibana dashboard",
    'href': "https://app.logz.io/goto/b743888cd993c2ed8aeb808907bd1b4d?shareToken=53ca6609-b711-421b-9cfd-58f8aad75a64",
    'desc': "VPC Flow Log Analysis with the ELK Stack on logz.io, Logz.io is an AI-powered log analysis platform that offers the open source ELK Stack as a cloud service with machine learning technology and can be used for IT infrastructure and application monitoring, DevOps, business intelligence, and more, This dashboard is showing my VPC with a redhat linux machine updating the yum database hourly.",
    'image': {
      'desc': "screen shot of the VPC flow logs kibana dashboard",
      'src': "images/kibana.PNG",
      'comment': ""
    }
  },
  {
    'title': "Jira Dashboard",
    'href': "http://jira.djc.cloud",
    'desc': "My jira project tracking this portfolio, it uses a redirected static website bucket in S3 fronted by a route 53 record set, A JIRA project is a collection of issues. Your team could use a JIRA project to coordinate the development of a product, track a project, manage a help desk, and more, depending on your requirements. A JIRA project can also be configured and customized to suit the needs of you and your team",
    'image': {
      'desc': "My jira dashboard tracking this Portfolio",
      'src': "images/jira.png",
      'comment': ""
    }
  },
  {
    'title': "Cloudfront Kibana Dashboard",
    'href': "https://app.logz.io/goto/5bcedc56463ebd71c5df86f231d068fb?shareToken=f8140b69-4f9d-4f9c-bf21-73286198dcd6",
    'desc': "Cloudfront Log Analysis with the ELK Stack on logz.io, Logz.io is an AI-powered log analysis platform that offers the open source ELK Stack as a cloud service with machine learning technology and can be used for IT infrastructure and application monitoring, DevOps, business intelligence, and more, This dashboard is showing Amazons cloudfront distribution stats of this website",
    'image': {
      'desc': "screen shot of the Cloudfront logs kibana dashboard",
      'src': "images/kibana.PNG",
      'comment': ""
    }
  },
  {
    'title': "Portfolio Architecture Info",
    'href': "https://s3.eu-west-2.amazonaws.com/portfolio.djc.cloud/images/portfolio_architecture.PNG",
    'desc': "This is the architecture of this Portfolio, it uses multiple technolgies and programming techniques, The course was provided by \"A Cloud Gurus\" online system. ",
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
