const data = {
  products: [
    {
      id:1, name: "Jordan Two Trey",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/treyMain.webp",
      price: 135,
      brand: "Jordan",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner1.jpg",
      images: [
      "/images/trey1.webp",
        "/images/trey1.webp",
       "/images/trey1.webp",
     "/images/trey1.webp",
       "/images/trey1.webp",
       "/images/trey1.webp",
      ],
    },
    {
      id:2, name: "adidas Eastrail 2.0 Hiking Shoes",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/adidas-Eastrail.webp",
      images: [
        { image: "/images/adidas-Eastrail1.webp" },
        { image: "/images/adidas-Eastrail2.webp" },
        { image: "/images/adidas-Eastrail3.webp" },
        { image: "/images/adidas-Eastrail4.webp" },
        { image: "/images/adidas-Eastrail5.webp" },
        { image: "/images/adidas-Eastrail6.webp" },
      ],
      price: 85,
      brand: "adidas",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description:
        "Take in a sweeping vista. Hike to a waterfall. Cruise across town. Feel the freedom to roam in the comfort of these adidas hiking shoes. Abrasion-resistant overlays on a breathable mesh upper hold up to the scuffs and scrapes of big adventures while lightweight cushioning keeps you comfortable on your feet. Even in rugged terrain, the Traxion outsole ensures confident footing.",
    },
  ],
};

export default data;
