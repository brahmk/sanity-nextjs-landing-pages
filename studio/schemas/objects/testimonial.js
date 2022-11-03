export default {
  name: 'testimonial',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'name of the person giving testimonial'
    },
    { name: 'quote', type: 'text', title: 'Quote', description: 'quote on the testimonial' },
    {
      name: 'photo',
      type: 'figure',
      title: 'Photo',
      description: 'photo of the person giving the testimonial'
    }
  ]
}
