export const getComments = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postComment = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateComment = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteComment = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
