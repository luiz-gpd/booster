const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Student Management System',
        version: '1.0.0',
        description: 'Student Management System covered Create, Read, Update, and Delete operations using a Node.js API',
      },
      servers:[
        {url:'http://localhost:5000/api'}, //you can change you server url
      ],
    },
  
    apis: ['./routes/*.js'], //you can change you swagger path
  };