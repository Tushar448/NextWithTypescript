import axios from "axios";

export async function getHomeCategoryDetails() {
  const {data} = await axios.get(
    "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&o rder=desc&sort=activity&site=stackoverflow"
  );

  return data;
}

////"https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/home/categories"