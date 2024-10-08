let colors = {
  White: "921_929",
  Black: "919",
  Pink: "928_931",
  Blue: "918",
  Green: "922",
  Gray: "927_940",
  Brown: "926_934_932",
  Orange: "925",
  Yellow: "924",
  Purple: "923",
  Red: "920",
};

let sizes = {
  28: "1074_1082_979",
  30: "1069_975",
  32: "1073_1086_978",
  34: "1071_1089_976",
  35: "1060",
  36: "1068_1087_977_990",
  37: "1057",
  38: "980_996",
  39: "1058",
  40: "1059_992",
  41: "1051",
  42: "1052_991",
  43: "1053",
  44: "1054_994",
  45: "1055",
  46: "1056_993",
  XS: "973_999",
  S: "1000_1064_999",
  M: "1000_972_998",
  L: "1001_1065_998",
  XL: "1001_974",
};

let categoriesWomen = {
  Jeans: "גינסים/wide-leg-jeans",
  Pants: "pants/מכנסיים-ארוכים",
  Dresses: "שמלות",
  Skirts: "שמלות",
  Sweaters: "sweaters",
  Sweatshirts: "sweatshirts",
  Jackets: "jackets-and-coats",
  Shirts: "חולצות",
  Shoes: "נעליים",
  Shorts: "",
  Suits: "",
};

let categoriesMen = {
  Jeans: "גינסים",
  Pants: "pants_men",
  Jackets: "jackets-and-coats",
  Sweatshirts: "sweatshirts",
  Shirts: "חולצות",
  Shoes: "shoes",
  Shorts: "pants_men",
};

function getUrl(gender, category, size, color) {
  if (colors[color] == undefined || sizes[size] == undefined) {
    return null;
  }

  let url = "https://www.urbanica-wh.com/";
  let urls = [];
  let rest = "color_group=" + colors[color] + "&size_group=" + sizes[size];

  if (gender == "Women") {
    if (categoriesWomen[category] == undefined) {
      return null;
    }

    url += "women/";

    if (category == "Shorts") {
      urls = [
        url + "pants/shorts?" + rest,
        url + "גינסים/גינסים-קצרים?" + rest,
      ];
    } else if (category == "Suits") {
      urls = [url + "שמלות?product_type=2665&" + rest, url + "סטים?" + rest];
    } else {
      url += categoriesWomen[category] + "?";

      if (category == "Dresses") {
        url += "product_type=2778&";
      } else if (category == "Skirts") {
        url += "product_type=3309&";
      }

      url += rest;
    }
  } else if (gender == "Men") {
    if (categoriesMen[category] == undefined) {
      return null;
    }
    url += "men/" + categoriesMen[category] + "?";

    if (category == "Pants") {
      url += "product_type=887&";
    } else if (category == "Shorts") {
      url += "product_type=881&";
    }
    url += rest;
  }

  if (urls.length === 0) {
    urls = [url];
  }

  return urls;
}

export { getUrl };
