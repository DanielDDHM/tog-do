import User from './user.js';
import Projects from './projects.js';
import Boards from './boards.js';
import Cards from './cards.js';
import Comments from './comments.js';
import Workspace from './workspace.js';

User.belongsToMany(Workspace, {
  through: 'workspace_users',
});
Workspace.belongsToMany(User, {
  through: 'workspace_users',
});

Workspace.hasMany(Boards);
Boards.belongsTo(Workspace);

Boards.hasMany(Cards);
Cards.belongsTo(Boards);

Cards.hasMany(Comments);
Comments.belongsTo(Cards);

User.hasMany(Comments);
Comments.belongsTo(User);

Projects.hasMany(Workspace);
Workspace.belongsTo(Projects);

export { User, Boards, Projects, Cards, Comments, Workspace };
