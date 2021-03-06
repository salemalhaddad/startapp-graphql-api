# A GraphQL API for listing startups in the UAE

To use the API, you can visit this [website](http://www.startapp-api.xyz/graphql).

# Tech Stack

**Backend:**
- NodeJS
- GraphQL
- Prisma as ORM
- PostgresSQL as DB
- Docker

**Frontend:**
- React
- Tailwind CSS


# Querying the list of startups
```
{
  getAllStartups {
    id 
    name
    type
    website
    img
    positions {
      title
      experience
      type
    }
  }
}
```

# API mutation: Adding a startup with its name, website and type
```
{
  createStartup(name: "Schoolvoice", website: "schoolvoice.com", type: "EdTech", img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dzpcvvlcbdk3odjrhla5") 
    id //to show id on the right window
  }
}
```
