import { PERSIST } from "../config/app";

// Запоминаем пользователя, чтобы он делал login каждый раз
export default function persistUser() {
   localStorage.setItem(PERSIST, "true");
}
