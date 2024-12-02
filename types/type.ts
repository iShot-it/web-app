// export interface Post {
//     id: string
//     user: {
//       name: string
//       avatar: string
//     }
//     image: string
//     caption?: string
//     location?: string
//     timestamp: string
//     likes: number
//     comments: number
//     timeAgo: string
//   }

  export type IRegisterPayload = {
    firstname: string;  // User's first name
    lastname: string;   // User's last name
    username: string;   // Username for login or display
    password: string;   // User's password
    userType?: "USER" | "ADMIN"; // User type, can be extended if needed
    photo?: string;     // Optional: Photo URL or data
    email: string;      // User's email address
  };
  export type ILoginPayload = {
    password: string;   
    email: string;      
  };

  export type ISignupResponse ={
    success: boolean;
    message: string;
    data: {
      _id: string;
      userType: string;
      permissions: any[]; // You might want to define a more specific type for permissions
      status: string;
      createdAt: string;
      firstname: string;
      lastname: string;
      username: string;
      email: string;
      __v: number;
      token: string;
    }
  }

  export type IUser = {
      _id: string;
      userType: "USER" | "ADMIN" | "MODERATOR"; 
      permissions: (
        | "CAN_CREATE"
        | "CAN_POST"
        | "CAN_LIKE"
        | "CAN_UPDATE_A_POST"
        | "CAN_UPDATE_AN_ACCOUNT"
        | "CAN_DEACTIVATE_ACCOUNT"
        | "CAN_REFER_SOMEONE"
        | "CAN_SHARE"
      )[];
      status: "VERIFIED" | "PENDING" | "SUSPENDED"; 
      createdAt: string; 
      username: string;
      email: string;
      __v: number;
      token: string; 
      firstname: string;
      lastname: string;
      phoneNumber: string;
      photo: string; 
    };
  
  export type IUpdateUser={
    id:string|undefined
      username: string|undefined;
      firstname: string|undefined;
      lastname: string|undefined;
      phoneNumber: string|undefined;
      photo: string|undefined; 

  }

  export type IFriendsList= {
    userId: string;
    username: string;
    photo: string; // URL to the user's photo
  }[]

  export interface Post {
    userInfo: {
      username: string;
      userID: string;
      photo: string; // URL to the user's photo
    };
    _id: string; // Unique identifier for the post
    post: string; // The content of the post
    media: string[]; // Array of media URLs (can be empty)
    longitude: string; // Longitude coordinate
    latitude: string; // Latitude coordinate
    likeCount: number,
    commentCount: 1,
    link: string; // URL link associated with the post
    isPrivate: boolean; // Indicates if the post is private
    createdAt: string; // ISO string for creation date
    updatedAt: string; // ISO string for last update date
    __v: number; // Version key (used by MongoDB)
  }
  
  export type IPosts = Post[];
  
  
 