import { injectable, inject } from "inversify";
import TreeModel from "tree-model";
import { Router } from "../Routing/Router";
import { makeObservable, computed, action } from "mobx";

@injectable()
export class NavigationRepository {
  @inject(Router)
  router;

  get currentNode() {
    var self = this;
    return this.getTree().all(function (node) {
      return node.model.id === self.router.currentRoute.routeId;
    })[0];
  }

  constructor() {
    makeObservable(this, {
      currentNode: computed,
      back: action,
    });
  }

  getTree() {
    let tree = new TreeModel();

    let root = tree.parse({
      id: "loginLink",
      type: "root",
      text: "Home",
      children: [
        {
          id: "booksLink",
          type: "link",
          text: "Books",
          children: [
            {
              id: "authorsLink",
              type: "link",
              text: "Authors",
              children: [
                {
                  id: "authorsLink-authorPolicyLink",
                  type: "link",
                  text: "Author Policy",
                },
                {
                  id: "authorsLink-mapLink",
                  type: "link",
                  text: "View Map",
                },
              ],
            },
          ],
        },
      ],
    });

    return root;
  }

  back = () => {
    let currentNode = this.currentNode;
    this.router.goToId(currentNode.parent.model.id);
  };
}
