const products = [
    {
      "name": "Organic Bananas",
      "id": 101,
      "price": 1.00,
      "green": true,
      "sustainable": true,
      "seasonal": false,
      "local": false,
      "eco_friendly_green_point": 8,
      "discount": 0.15,
      "url": "https://assets.iceland.co.uk/i/iceland/fyffes_premium_bananas_89322_T1.jpg"
    },
    {
      "name": "Grass-fed Beef",
      "id": 102,
      "price": 5.50,
      "green": true,
      "sustainable": false,
      "seasonal": true,
      "local": false,
      "eco_friendly_green_point": 9,
      "discount": 0.10,
      "url": "https://assets.iceland.co.uk/i/iceland/iceland_big_daddy_sirloin_steak_340g_81297.jpg"
    },
    {
      "name": "Fresh Red and Green Salad",
      "id": 103,
      "price": 2.50,
      "green": true,
      "sustainable": false,
      "seasonal": true,
      "local": true,
      "eco_friendly_green_point": 7,
      "discount": 0.20,
      "url": "https://assets.iceland.co.uk/i/iceland/fresh_leaf_co_red_green_mix_70g_94327_T1"
    },
    {
      "name": "Free-range Eggs",
      "id": 104,
      "price": 4.25,
      "green": true,
      "sustainable": true,
      "seasonal": false,
      "local": true,
      "eco_friendly_green_point": 6,
      "discount": 0.10,
      "url": "https://assets.iceland.co.uk/i/iceland/iceland_12_large_free_range_eggs_64257.jpg"
    },
    {
      "name": "Whole Grain Bread",
      "id": 105,
      "price": 5.75,
      "green": true,
      "sustainable": true,
      "seasonal": true,
      "local": true,
      "eco_friendly_green_point": 7,
      "discount": 0.15,
      "url": "https://assets.iceland.co.uk/i/iceland/iceland_thick_sliced_wholemeal_800g_68906.jpg?"
    },
    {
      "name": "Wild-Caught Salmon",
      "id": 106,
      "price": 9.99,
      "green": true,
      "sustainable": true,
      "seasonal": false,
      "local": false,
      "eco_friendly_green_point": 8,
      "discount": 0.10,
      "url": "https://assets.iceland.co.uk/i/iceland/arctic_royal_4_atlantic_salmon_fillets_520g_76676_T1.jpg"
    },
    {
      "name": "Organic Spinach",
      "id": 107,
      "price": 3.75,
      "green": true,
      "sustainable": true,
      "seasonal": true,
      "local": true,
      "eco_friendly_green_point": 9,
      "discount": 1.20,
      "url": "https://assets.iceland.co.uk/i/iceland/little_leaf_co_mild_baby_spinach_100g_94729_T596.jpg"
    },
    {
      "name": "Locally Sourced Honey",
      "id": 108,
      "price": 6.50,
      "green": true,
      "sustainable": true,
      "seasonal": true,
      "local": true,
      "eco_friendly_green_point": 7,
      "discount": 0.10,
      "url": "https://assets.iceland.co.uk/i/iceland/hilltop_value_clear_honey_250g_89070_T1.jpg"
    },
    {
      "name": "Plant-Based Burger",
      "id": 109,
      "price": 3.99,
      "green": true,
      "sustainable": true,
      "seasonal": false,
      "local": false,
      "eco_friendly_green_point": 8,
      "discount": 0.15,
      "url": "https://assets.iceland.co.uk/i/iceland/frys_4_plant_based_chicken_style_burgers_320g_69230_T1.jpg"
    },
    {
      "name": "Organic Blueberries",
      "id": 110,
      "price": 4.50,
      "green": true,
      "sustainable": true,
      "seasonal": true,
      "local": false,
      "eco_friendly_green_point": 7,
      "discount": 0.10,
      "url": "https://assets.iceland.co.uk/i/iceland/iceland_blueberries_150g_74443.jpg"
    },
      
      {
        "name": "Cheese",
        "id": 105,
        "price": 1.99,
        "green": false,
        "sustainable": false,
        "seasonal": false,
        "local": false,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/iceland_mature_cheddar_220g_88833.jpg"
      },
  
      {
        "name": "Milk",
        "id": 105,
        "price": 2.99,
        "green": true,
        "sustainable": true,
        "seasonal": true,
        "local": true,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/iceland_british_semi_skimmed_milk_4_pints_2272l_22919.jpg"
      },
  
      {
        "name": "Plums",
        "id": 105,
        "price": 0.99,
        "green": false,
        "sustainable": false,
        "seasonal":false,
        "local": false,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/iceland_plums_79326.jpg"
      },
  
      {
        "name": "Pineapple",
        "id": 105,
        "price": 1.09,
        "green": true,
        "sustainable": true,
        "seasonal": true,
        "local": true,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/del_monte_pineapple_200g_92886_T1.jpg"
      },
  
      {
        "name": "Walnuts",
        "id": 105,
        "price": 0.85,
        "green": false,
        "sustainable": false,
        "seasonal": false,
        "local": false,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url":"https://assets.iceland.co.uk/i/iceland/snacking_essentials_walnuts_200g_82274_T1.jpg"
      },
  
      {
        "name": "Carrot Cake",
        "id": 105,
        "price": 1.25,
        "green": false,
        "sustainable": false,
        "seasonal": false,
        "local": false,
        "eco_friendly_green_point": 0,
        "discount": 0.15,
        "url":"https://assets.iceland.co.uk/i/iceland/carrs_delicious_carrot_cake_mix_425g_94418_T1.jpg"
      },
  
      {
        "name": "Iceberg Lettuce",
        "id": 105,
        "price": 1.89,
        "green": true,
        "sustainable": true,
        "seasonal": true,
        "local": true,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/iceland_iceberg_lettuce_19705.jpg"
      },
      {
        "name": "Frozen Fish Fingers",
        "id": 105,
        "price": 3.00,
        "green": true,
        "sustainable": true,
        "seasonal": true,
        "local": true,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/birds_eye_8_crispy_batter_fish_fingers_224g_57317_T596.jpg"
      },
  
      {
        "name": "Salmon",
        "id": 105,
        "price": 10.00,
        "green": true,
        "sustainable": true,
        "seasonal": true,
        "local": true,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url":"https://assets.iceland.co.uk/i/iceland/iceland_boneless_2_atlantic_salmon_fillets_240g_77504.jpg"
      },
  
      {
        "name": "Frozen Chips",
        "id": 105,
        "price": 1.50,
        "green": false,
        "sustainable": false,
        "seasonal": false,
        "local": false,
        "eco_friendly_green_point": 7,
        "discount": 0.15,
        "url": "https://assets.iceland.co.uk/i/iceland/mccain_quick_chips_crinkle_6_x_100g_600g_77778_T1.jpg"
      }
    ]

  
    export default products;
