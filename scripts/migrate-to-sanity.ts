import { createClient } from '@sanity/client'

// Create Sanity client directly with credentials for migration
const sanityClient = createClient({
  projectId: 'd3vd2fhh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk9cyTlyk3vy77U5wiHZivtUqyOKGP6v9Huk8eUSdzorPs8xw18bEHgJ8w37Dwai4XR4Nwr60rsRVrzLMzpSxVk91b3Ifcz0NdXdwHhnDJFqz7JhsYBctticmbdWKgAyNQXLa7KAFJrFGCZfcG4znCj1l1ct9r0pquDZ4ZqY0MxYIj3mmajz',
})

// Menu data from /app/menus/page.tsx
const menuData = {
  smallBites: [
    "Avocado Chana Chaat",
    "Palak Paneer Swirls",
    "Bhatti Paneer Kulcha Bites",
    "Mexican Chaat Cups",
    "Assorted Crostinis",
    "Crudité Hummus Cups",
    "Thai Crunch Salad Cups",
    "Avocado Mango Bhel Cups",
    "Dahi Bhalla Bombs",
    "Chaat Papdi Board",
    "Achaari Aloo Puff Pockets",
    "Szechuan Paneer Sliders",
    "Deconstructed Samosa Cups",
    "Golgappa Station"
  ],
  largeBites: [
    "Alfredo Paneer Kathi Rolls",
    "Paneer Tikka Croissant",
    "Street Style Bun Chola",
    "The OG Vada Pav",
    "Crunchy Tikki Burger",
    "Thecha Aloo Wrap",
    "Classic Style Dabeli"
  ],
  meals: [
    "Pineapple Szechuan Fried Rice",
    "Makhni Penne Pasta",
    "Vegetable Lasagna",
    "Au Gratin with Garlic Bread",
    "Pav Bhaji",
    "Paneer Makhni Biryani",
    "Thai Red Curry"
  ],
  curries: [
    "Makhni Magic Daal",
    "Koyla Daal Dhaba",
    "Chole Gali Style",
    "Pind Di Kadhi",
    "Paneer Butter Bliss",
    "Kadahi Style Paneer",
    "Korma Royale",
    "Aachar - E - Aloo",
    "Methi Matar Malai"
  ],
  sides: [
    "Naan Kulcha Collective",
    "Ghar Ka Paratha",
    "Jeera Kissed Rice",
    "Shahi Kesar Pulav",
    "Minty Desi Raita"
  ],
  desserts: [
    "Berry Blossom Kheer",
    "Motichoor Rabdi Parfait",
    "Gulab Jamun Pudding",
    "Gajar Halwa Tarts",
    "Jalebi Rabdi Bowls",
    "Very Berry Trifle",
    "Mango Rasmalai Tiramisu",
    "Assorted Indian Fusion Tiramisu"
  ],
  drinks: [
    "Bubbly Peach",
    "Blackberry Kala Khatta",
    "Sweet & Sour Mango",
    "Black Grape Shikanj"
  ]
}

async function migrateMenuItems() {
  console.log('🚀 Starting menu migration...')
  let totalCreated = 0
  let totalFailed = 0

  for (const [category, items] of Object.entries(menuData)) {
    console.log(`\n📋 Migrating ${category}...`)
    for (let i = 0; i < items.length; i++) {
      try {
        await sanityClient.create({
          _type: 'menuItem',
          name: items[i],
          category,
          order: i,
          isActive: true
        })
        console.log(`  ✓ ${items[i]}`)
        totalCreated++
      } catch (error) {
        console.error(`  ✗ Failed: ${items[i]}`, error)
        totalFailed++
      }
    }
  }

  console.log(`\n✨ Menu migration complete!`)
  console.log(`   Created: ${totalCreated} items`)
  console.log(`   Failed: ${totalFailed} items`)
}

async function main() {
  try {
    await migrateMenuItems()
    console.log('\n✅ All migrations completed successfully!')
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

main()
