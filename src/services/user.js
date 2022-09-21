export const getUser = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(error.StatusCode || 500).send(error?.messages);
  }
};

export const postUser = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(error.StatusCode || 500).send(error?.messages);
  }
};

export const putUser = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(error.StatusCode || 500).send(error?.messages);
  }
};

export const deleteUser = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(error.StatusCode || 500).send(error?.messages);
  }
};
