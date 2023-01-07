const products = [
  {
    id: 1,
    name: "Jordan Two Trey",
    slug: "free-shirt",
    category: "Shirts",
    image:
      "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959655/Croydon/treyMain_l4kslk.webp",
    price: 135,
    brand: "Jordan",
    rating: 4.5,
    numReviews: 8,
    countInStock: 20,
    description: "A popular shirt",
    isFeatured: true,
    banner: "/images/banner1.jpg",
    images: [
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959654/Croydon/trey1_av6bgk.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959655/Croydon/trey2_c91zbo.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959654/Croydon/trey3_eynyzc.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959655/Croydon/trey4_g8xpuk.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959655/Croydon/trey5_iaalpm.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959655/Croydon/trey6_bn6osa.webp",
      },
    ],
  },
  {
    id: 2,
    name: "adidas Eastrail 2.0 Hiking Shoes",
    slug: "golf-pants",
    category: "Pants",
    image:
      "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959650/Croydon/adidas-Eastrail_azodj2.webp",
    images: [
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959650/Croydon/adidas-Eastrail1_xky9wg.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959650/Croydon/adidas-Eastrail2_vikiw6.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959650/Croydon/adidas-Eastrail3_vja5sh.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959650/Croydon/adidas-Eastrail4_diicpp.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Eastrail5_qzi5pz.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Eastrail6_l00vwx.webp",
      },
    ],
    price: 85,
    brand: "adidas",
    rating: 2.9,
    numReviews: 13,
    countInStock: 20,
    description:
      "Take in a sweeping vista. Hike to a waterfall. Cruise across town. Feel the freedom to roam in the comfort of these adidas hiking shoes. Abrasion-resistant overlays on a breathable mesh upper hold up to the scuffs and scrapes of big adventures while lightweight cushioning keeps you comfortable on your feet. Even in rugged terrain, the Traxion outsole ensures confident footing.",
  },
  {
    id: 3,
    name: "Jordan Air 1 Mid SE",
    slug: "fit-shirt",
    category: "Shirts",
    image:
      "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/Jordan1_mwrlqx.webp",
    images: [
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959654/Croydon/Jordan1-1_vefzti.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan1-2_ba1hnv.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/Jordan1-3_lm8ipn.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan1-4_x7up6i.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/Jordan1-5_drsdqw.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/Jordan1-6_hh7qjj.webp",
      },
    ],
    price: 135,
    brand: "Jordan",
    rating: 3.2,
    numReviews: 10,
    countInStock: 20,
    description:
      "Need a sneaker refresh? Then cop these men's Air 1 Mid trainers from Jordan. Coming in a Black and Fire Red colourway, these kicks have an upper made from a blend of genuine and synthetic leather for lasting durability. They feature a lace fastening with a mid-cut padded ankle collar to keep your feet snug and secure. Underfoot is a soft foam midsole that uses Nike Air tech for next level cushioned comfort and rubber outsole max' grip. With perforations to the toe for breathability, they're signed off with the Wings logo to the heel and a Swoosh to the sidewalls.",
    isFeatured: true,
    banner: "/images/banner2.jpg",
  },
  {
    id: 4,
    name: "adidas Ultraboost 1.0 Shoes",
    slug: "fit-pants",
    category: "Pants",
    image:
      "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Ultraboost_ujxi4r.webp",
    images: [
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Ultraboost1_gyhyis.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Ultraboost2_dfs4pf.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Ultraboost3_o1skru.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Ultraboost4_u7cszq.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/adidas-Ultraboost5_czp4uz.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959651/Croydon/adidas-Ultraboost6_wuq9ms.webp",
      },
    ],
    price: 160,
    brand: "adidas",
    rating: 3.5,
    numReviews: 7,
    countInStock: 20,
    description:
      "These adidas Ultraboost running shoes combine the most advanced adidas technology for a performance that has to be felt to be believed. The sock-like adidas Primeknit upper has been redesigned to allow air to flow freely. A supportive heel counter supports the back of your foot, while adidas BOOST delivers maximum comfort and energy return. The Stretchweb outsole is made with Continental™ Rubber for a firm grip and a smooth ride.This shoe's upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.",
  },
  {
    id: 5,
    name: "Jordan Point Lane",
    slug: "slim-shirt",
    category: "Shirts",
    image:
      "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point_kuv7tt.webp",
    images: [
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point1_omb7re.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point2_zme7ao.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point3_eilg94.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point4_gn3fh8.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point5_r7duui.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959652/Croydon/Jordan-Point6_mtqh8p.webp",
      },
    ],
    price: 90,
    brand: "Jordan",
    rating: 4.5,
    numReviews: 3,
    countInStock: 20,
    description: "A popular shirt",
  },
  {
    id: 6,
    name: "Nike Air Force 1 07 LV8",
    slug: "classic-pants",
    category: "Pants",
    image:
      "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/NikeAirForce_vxak4m.webp",
    images: [
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/NikeAirForce1_nzmcvi.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/NikeAirForce2_mvartm.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/NikeAirForce3_ulslhz.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/NikeAirForce4_piyrtm.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959654/Croydon/NikeAirForce5_fwc2xx.webp",
      },
      {
        image:
          "https://res.cloudinary.com/do3tnaq53/image/upload/v1672959653/Croydon/NikeAirForce6_itz2h3.webp",
      },
    ],
    price: 115,
    brand: "Nike",
    rating: 2.4,
    numReviews: 14,
    countInStock: 20,
    description:
      "Exclusive to JD. Elevate your rotation with these men's Air Force 1 '07 LV8 sneakers from Nike. In a Cargo Khaki colourway, these refreshed classics have a premium leather and synthetic upper for a soft yet durable wear. They feature a low-cut, padded ankle collar for a comfy fit, as well as a tonal lace-up front and heel pull for easy access. Underfoot, the contrasting foam midsole houses Nike Air cushioning for a responsive step, while the rubber outsole has hoops pivot circles for an OG look and standout grip. Signed off with the iconic Swoosh logo to the sidewalls and Nike Air branding at the heel and tongue",
  },
];

module.exports = products;
