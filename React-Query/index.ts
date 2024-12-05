export const queryKeys = {
    user: {
      root: [{ type: "currentUser" }],
      notification: [{ type: "userNotification" }],
    },
    friends: {
      friendsList: [{ type: "friendsList" }],
      friendsearch: [{ type: "friendsearch" }],
      recentEvents: [{ type: "recentEvents" }],
      recentMedias: [{ type: "recentMedias" }],
      explore: [{ type: "explore" }],
      id: (id: string) => [{ type: "eventById", id }],
      user: (id: string) => [{ type: "eventUser", id }],
      signature: [{ type: "signature" }],
    },
    posts: {
      posts:[{type:"posts"}]
    },
    auth: {
      root: [{ type: "auth" }],
    },
  };