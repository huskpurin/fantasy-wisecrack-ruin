export const login = (account, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "MOCK_TOKEN" });
    }, 2000);
  });
};
