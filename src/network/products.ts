import API from "./API";

interface Price {
  NGN: [number, number | null, string | number[]];
}
interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

interface Product {
  name: string;
  description: string | null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: string[];
  categories: string[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: Price[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: string | null;
}

interface PaginatedResponse {
  page: number;
  size: number;
  total: number;
  debug: string | null;
  previous_page: string | null;
  next_page: string | null;
  items: Product[];
}

interface ExtraInfo {
  id: string;
  key: string;
  value: string;
  value_dt: string | null;
}

//   interface Photo {
//     model_name: string;
//     model_id: string;
//     organization_id: string;
//     filename: string;
//     url: string;
//     is_featured: boolean;
//     save_as_jpg: boolean;
//     is_public: boolean;
//     file_rename: boolean;
//     position: number;
//   }

interface SingleProduct {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: string[];
  categories: string[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: number;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: ExtraInfo[];
}

export const getProducts = async (page: number): Promise<PaginatedResponse> => {
  return API.get<PaginatedResponse>(
    `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=8fd4e62556d040678e8db4d52b326808&reverse_sort=false&page=${page}&size=5&Appid=X37P4VXA05B6OG1&Apikey=8e932ac9afda4fa4b0ea47b7a398da7520240713123017123908`
  );
};

export const getSingleProduct = async (id: string): Promise<SingleProduct> => {
  return API.get<SingleProduct>(
    `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=8fd4e62556d040678e8db4d52b326808&reverse_sort=false&page=1&size=10&Appid=X37P4VXA05B6OG1&Apikey=8e932ac9afda4fa4b0ea47b7a398da7520240713123017123908`
  );
};
