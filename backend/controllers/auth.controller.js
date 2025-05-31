export const signup = async (req, res) => {
  res.json({ data: "You will hit signup from here" });
};

export const login = async (req, res) => {
  res.json({ data: "You are on login endpoint" });
};

export const logout = async (req, res) => {
  res.json({ data: "You are on logout page" });
};
