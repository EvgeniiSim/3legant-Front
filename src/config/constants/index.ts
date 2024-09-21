import { Paths } from "../paths";

export const ACCESS_TOKEN = "accessToken";
export const PERSIST = "persist";
export const API_URL = import.meta.env.VITE_API_URL;
export const AccountMenuItems: Array<{
   href: Paths;
   label: "Account" | "Address" | "Orders" | "Wishlist";
}> = [
   { href: Paths.ACCOUNT, label: "Account" },
   { href: Paths.ADDRESS, label: "Address" },
   { href: Paths.ORDERS, label: "Orders" },
   { href: Paths.WHISHLIST, label: "Wishlist" },
];
