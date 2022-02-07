# A GraphQL API for listing startups in the UAE

To use the API, you can visit this [website] (http://startapp-list-graphql.herokuapp.com/graphql).

Tech stack:
- NodeJS
- GraphQL
- ExpressJS


# Querying the list of startups
```
{
  getAllStartups {
    id 
    name
    type
    website
    img
    positions
  }
}
```

# API mutation: Adding a startup with its name, website and type
```
{
  createStartup(name: "Schoolvoice", website: "schoolvoice.com", type: "EdTech") 
    id //to show id on the right window
  }
}
```
