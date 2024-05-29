export let users = [
    { email: "t@gmail.com", password: "1" },
    { email: "the@gmail.com", password: "1" }
]

// Hàm callback để cập nhật dữ liệu người dùng
let updateUserCallback = null;

// Đăng ký hàm callback
export const registerUpdateUserCallback = (callback) => {
  updateUserCallback = callback;
};

// Thêm người dùng vào mảng users và gọi hàm callback (nếu đã đăng ký)
export const addUser = (user) => {
  users.push(user);
  if (updateUserCallback) {
    updateUserCallback(users);
  }
};
