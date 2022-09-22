import User from "./user.js";
import Projects from "./projects.js";
import Boards from "./boards.js";
import Cards from "./cards.js";
import Comments from "./comments.js";
import Workspace from "./workspace.js";

User.belongsToMany(Workspace, {
  through: "User_workspace",
  as: "Workspaces",
  foreignKey: "User_id",
});

Workspace.belongsToMany(User, {
  through: "User_workspace",
  as: "User",
  foreignKey: "Workspace_id",
});

Workspace.hasMany(Boards, {
  as: "Boards",
});

Boards.belongsTo(Workspace, {
  foreignKey: "WorkspaceId",
  as: "Workspace",
});

Boards.hasMany(Cards, {
  as: "Cards",
});

Cards.belongsTo(Boards, {
  foreignKey: "BoardId",
  as: "Board",
});

Cards.belongsTo(User, {
  as: "User",
  foreignKey: "UserId",
});

export { User, Boards, Projects, Cards, Comments, Workspace };
