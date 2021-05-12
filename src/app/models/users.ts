export interface User {
  id: number;
  photo: string;
  bio: string;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices metus nec odio congue, in congue erat bibendum. Proin sed consequat orci. Maecenas orci lorem, vulputate commodo enim eu, mattis mollis nibh',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
  },
  {
    id: 2,
    name: 'Jane Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices metus nec odio congue, in congue erat bibendum. Proin sed consequat orci. Maecenas orci lorem, vulputate commodo enim eu, mattis mollis nibh',
    photo:
      'https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1834&q=80',
  },
  {
    id: 3,
    name: 'Kate Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices metus nec odio congue, in congue erat bibendum. Proin sed consequat orci. Maecenas orci lorem, vulputate commodo enim eu, mattis mollis nibh',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1834&q=80',
  },
  {
    id: 4,
    name: 'Pete Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices metus nec odio congue, in congue erat bibendum. Proin sed consequat orci. Maecenas orci lorem, vulputate commodo enim eu, mattis mollis nibh',
    photo:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
  },
  {
    id: 5,
    name: 'Alice Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices metus nec odio congue, in congue erat bibendum. Proin sed consequat orci. Maecenas orci lorem, vulputate commodo enim eu, mattis mollis nibh',
    photo:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
  },
];
