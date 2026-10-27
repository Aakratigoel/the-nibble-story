export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Small Bites', value: 'smallBites' },
          { title: 'Large Bites', value: 'largeBites' },
          { title: 'Meals', value: 'meals' },
          { title: 'Curries', value: 'curries' },
          { title: 'Sides', value: 'sides' },
          { title: 'Desserts', value: 'desserts' },
          { title: 'Drinks', value: 'drinks' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order items appear in their category'
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide on website',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category'
    }
  }
}
