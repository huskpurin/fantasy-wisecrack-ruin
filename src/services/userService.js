export const login = async (account, password) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "MOCK_TOKEN" });
    }, 3000);
  });
};
