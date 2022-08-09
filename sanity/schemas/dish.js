export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'dish description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of dish',
    },
    
  ],
}
