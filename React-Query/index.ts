export const queryKeys = {
    user: {
      root: [{ type: "currentUser" }],
      notification: [{ type: "userNotification" }],
    },
    event: {
      root: [{ type: "event" }],
      recentEvents: [{ type: "recentEvents" }],
      recentMedias: [{ type: "recentMedias" }],
      explore: [{ type: "explore" }],
      id: (id: string) => [{ type: "eventById", id }],
      user: (id: string) => [{ type: "eventUser", id }],
      signature: [{ type: "signature" }],
    },
    favorite: {
      root: [{ type: "favoriteEvent" }],
      id: (id: string) => [{ type: "favoriteEventById", id }],
    },
    auth: {
      root: [{ type: "auth" }],
    },
  };