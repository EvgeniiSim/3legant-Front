import { PERSIST } from "../config/constants/index";

// Запоминаем пользователя, чтобы он делал login каждый раз
export default function persistUser() {
   localStorage.setItem(PERSIST, "true");
}
