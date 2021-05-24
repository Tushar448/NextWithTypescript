export interface BrandResult {
    code: string,
    error: string,
    message: string,
    status: string,
    data: DataResult[]
}

export interface DataResult {
    name: string;
    slug: string;
    icon_url: string;
    brands_name: string;
    brands_slug: string;
  
}