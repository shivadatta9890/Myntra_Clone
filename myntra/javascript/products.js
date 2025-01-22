const products =
  [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/j/u/l-ts36-vebnor-original-imagswy2fyzeketr.jpeg?q=70",
      companyName: 'VeBNor',
      itemName: 'Product 1',
      rating: 4.5,
      originalPrice: 799,
      currentPrice: 279,
      discount: 78,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/d/i/l-jc22-hd-fs-black-jmc-pckt-jump-cuts-original-imagg3yxfk48y7nt.jpeg?q=70",
      companyName: 'JUMP CUTS',
      itemName: 'Product 2',
      rating: 3.8,
      originalPrice: 1529,
      currentPrice: 319,
      discount: 80,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/c/o/e/s-st10-vebnor-original-imagzdsu8hkehz8f.jpeg?q=70",
      companyName: '123 Enterprises',
      itemName: 'Product 3',
      rating: 4.2,
      originalPrice: 990,
      currentPrice: 289,
      discount: 74,
      return_period: 14
    },
    {
      id: 4,
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/j/c/s-ts12-vebnor-original-imagp6jcsgekgda4.jpeg?q=70&crop=false',
      companyName: 'VebNor',
      itemName: 'Product 4',
      rating: 4.7,
      originalPrice: 999,
      currentPrice: 279,
      discount: 72,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 16,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/e/c/v/s-deadinsidebeigehoodie-be-savage-original-imagvpyy3bywfkmx.jpeg?q=70',
      companyName: 'be savage',
      itemName: 'Product 16',
      rating: 4.4,
      originalPrice: 999,
      currentPrice: 699,
      discount: 72,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/l/n/-original-imagzry3qgdvkmhh.jpeg?q=70",
      companyName: 'Bata',
      itemName: 'Product 5',
      rating: 4.0,
      originalPrice: 1100,
      currentPrice: 899,
      discount: 24,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/9/l/k/-original-imagudcgyzybgdv9.jpeg?q=70",
      companyName: 'woodland',
      itemName: 'Product 6',
      rating: 3.5,
      originalPrice: 4195,
      currentPrice: 2898,
      discount: 30,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 15,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/8/r/o/-original-imagj4qp7af3gxqv.jpeg?q=70",
      companyName: 'urbano fashion',
      itemName: 'Product 15',
      rating: 3.8,
      originalPrice: 1599,
      currentPrice: 549,
      discount: 30,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/n/f/m/-original-imagqsu22mmahxah.jpeg?q=70",
      companyName: 'Sparx',
      itemName: 'Product 7',
      rating: 4.8,
      originalPrice: 849,
      currentPrice: 745,
      discount: 12,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 14,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/necklace-chain/c/5/s/1-18k-gold-plated-shree-ram-dotted-pendant-with-chain-24inch-original-imagwgqjhzuhqmts.jpeg?q=70&crop=false",
      companyName: 'Nikza enterprises',
      itemName: 'Product 14',
      rating: 4.2,
      originalPrice: 1599,
      currentPrice: 599,
      discount: 12,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/b/p/s-st2-vebnor-original-imagpv8vufgg5egp.jpeg?q=70",
      companyName: 'Mega Brands',
      itemName: 'Product 8',
      rating: 4.2,
      originalPrice: 820,
      currentPrice: 360,
      discount: 17,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 9,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/q/m/xxl-bigbluecheck-whitecheck-youth-first-original-imaghy7kffyayewm.jpeg?q=70",
      companyName: 'Future Ventures',
      itemName: 'Product 9',
      rating: 4.6,
      originalPrice: 1179,
      currentPrice: 499,
      discount: 20,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 10,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/z/s/s-tmrrnful-d73-tripr-original-imagrqvswzfct2mz.jpeg?q=70",
      companyName: 'Tripr',
      itemName: 'Product 10',
      rating: 4.9,
      originalPrice: 1999,
      currentPrice: 269,
      discount: 90,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 11,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70",
      companyName: 'Surhi',
      itemName: 'Product 11',
      rating: 4.5,
      originalPrice: 999,
      currentPrice: 299,
      discount: 85,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 12,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/p/p/8-rkt-19039-black-42-atom-black-original-imagzhc3g3hase4e.jpeg?q=70",
      companyName: 'ATOM',
      itemName: 'Product 12',
      rating: 4.3,
      originalPrice: 3299,
      currentPrice: 1379,
      discount: 55,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 13,
      image: "https://rukminim2.flixcart.com/image/612/612/kqco5u80/jewellery-set/g/c/h/780-r-a-enterprises-original-imag4dyzceaqhkhp.jpeg?q=70",
      companyName: 'r a enterprises',
      itemName: 'Product 13',
      rating: 4.3,
      originalPrice: 3599,
      currentPrice: 199,
      discount: 55,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1, 
    },
    {
      id: 17,
      image: "https://rukminim2.flixcart.com/image/612/612/l2p23rk0/iron/b/i/k/-original-imagdz3jvqmnukxt.jpeg?q=70",
      companyName: 'nova',
      itemName: 'Product 17',
      rating: 4.1,
      originalPrice: 999,
      currentPrice: 459,
      discount: 55,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },
    {
      id: 18,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/air-conditioner-new/q/v/y/-original-imagr5z7nmnyugzh.jpeg?q=70",
      companyName: 'bluestar',
      itemName: 'Product 18',
      rating: 4.4,
      originalPrice: 41095,
      currentPrice: 31085,
      discount: 55,
      return_period: 14,
      delivery_date:'14 Jan',
      quantity:1,
    },

  ];

  // export default products;