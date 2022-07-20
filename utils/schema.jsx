export const categorySchema = () => `
  *[_type == "category"] {
    ...,
    restaurants[]-> {
      ...,
      dishes[]->,
      type->{
        name
      }
    }
  }
`

export const featuredSchema = () => `
  *[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }
`

export const restaurantSchema = (id) => `
  *[_type == "featured" && _id == "${id}"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
    },
  }[0]
`

export const sortedCategorySchema = (id) => `
  *[_type == "category" && _id == "${id}"]{
    ...,
    restaurants[]-> {
      ...,
      dishes[]->,
      type->{
        name
      }
    }
  }[0]
`
